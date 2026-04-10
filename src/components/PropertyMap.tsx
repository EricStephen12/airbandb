"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  price: number;
  title: string;
}

interface PropertyMapProps {
  markers: MapMarker[];
  onMarkerClick?: (id: string) => void;
}

export default function PropertyMap({ markers, onMarkerClick }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Center on Lagos
    const map = L.map(mapRef.current, {
      center: [6.45, 3.42],
      zoom: 12,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Add zoom control to bottom right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Add price markers
    markers.forEach((marker) => {
      const priceIcon = L.divIcon({
        className: "custom-price-marker",
        html: `<div style="
          background: white;
          color: #111;
          font-weight: 700;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          border: 1px solid #ddd;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 0.15s, background 0.15s;
        ">$${marker.price}</div>`,
        iconSize: [60, 28],
        iconAnchor: [30, 14],
      });

      const m = L.marker([marker.lat, marker.lng], { icon: priceIcon }).addTo(map);
      m.on("click", () => {
        if (onMarkerClick) onMarkerClick(marker.id);
      });

      // Hover effect
      m.on("mouseover", () => {
        const el = m.getElement();
        if (el) {
          const inner = el.querySelector("div") as HTMLElement;
          if (inner) {
            inner.style.background = "#111";
            inner.style.color = "white";
            inner.style.transform = "scale(1.1)";
          }
        }
      });
      m.on("mouseout", () => {
        const el = m.getElement();
        if (el) {
          const inner = el.querySelector("div") as HTMLElement;
          if (inner) {
            inner.style.background = "white";
            inner.style.color = "#111";
            inner.style.transform = "scale(1)";
          }
        }
      });
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [markers, onMarkerClick]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-xl overflow-hidden"
      style={{ minHeight: "400px" }}
    />
  );
}
