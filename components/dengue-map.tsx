'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface DengueMapProps {
    center: [number, number];
    zoom: number;
    hotspots: Array<{
        name: string;
        coordinates: [number, number];
        severity: 'high' | 'moderate';
    }>;
}

export default function DengueMap({ center, zoom, hotspots }: DengueMapProps) {
    useEffect(() => {
        // Strict Naga City bounds - user cannot pan outside
        const nagaBounds: L.LatLngBoundsLiteral = [
            [13.58, 123.15], // Southwest
            [13.66, 123.25], // Northeast
        ];

        // Initialize map with strict bounds
        const map = L.map('dengue-map', {
            center,
            zoom,
            minZoom: 13, // Cannot zoom out beyond Naga City view
            maxZoom: 18,
            maxBounds: nagaBounds,
            maxBoundsViscosity: 1.0, // Hard restriction - immediate bounce back
        });

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        // Add hotspot markers with pulsing effect
        hotspots.forEach((hotspot) => {
            const color = hotspot.severity === 'high' ? '#ef4444' : '#f59e0b';
            const radius = hotspot.severity === 'high' ? 800 : 500;

            // Create pulsing circle
            const circle = L.circle(hotspot.coordinates, {
                color: color,
                fillColor: color,
                fillOpacity: 0.3,
                radius: radius,
                className: 'pulse-marker',
            }).addTo(map);

            // Add popup with medical clean styling
            circle.bindPopup(`
        <div class="p-2">
          <h3 class="font-bold text-slate-800">${hotspot.name}</h3>
          <p class="text-sm text-slate-600 mt-1">
            <span class="font-semibold ${hotspot.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                }">
              ${hotspot.severity === 'high' ? 'High' : 'Moderate'} Alert
            </span>
          </p>
        </div>
      `);
        });

        // Cleanup on unmount
        return () => {
            map.remove();
        };
    }, [center, zoom, hotspots]);

    return <div id="dengue-map" className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg" />;
}
