
import React from 'react';
import { Shield, Lock, Eye, Globe, Zap, Award, Users, Star, Info, BarChart, GitBranch } from 'lucide-react';

export const navLinks = [
  { id: 'about', label: 'Tentang' },
  { id: 'features', label: 'Fitur' },
  { id: 'stats', label: 'Statistik' },
  { id: 'topology', label: 'Topologi' },
  { id: 'social-proof', label: 'Testimoni' },
  { id: 'contact', label: 'Kontak' },
];

export const featureList = [
  {
    icon: Shield,
    title: "AI Threat Detection",
    description: "Deteksi ancaman real-time menggunakan machine learning untuk mengidentifikasi pola serangan yang tidak biasa.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Enkripsi tingkat militer untuk melindungi data sensitif Anda dengan algoritma AES-256.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Pemantauan sistem berkelanjutan dengan alert instan untuk setiap aktivitas mencurigakan.",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Globe,
    title: "Network Security",
    description: "Perlindungan jaringan komprehensif dengan firewall cerdas dan intrusion prevention system.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Sistem respons otomatis yang dapat mengisolasi ancaman dalam hitungan detik.",
    color: "from-pink-400 to-red-500"
  },
  {
    icon: Award,
    title: "Compliance Ready",
    description: "Memenuhi standar keamanan internasional seperti ISO 27001, SOC 2, dan GDPR.",
    color: "from-red-400 to-orange-500"
  }
];

export const stats = [
  { number: "1000+", label: "Klien Aktif", icon: Users },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Support", icon: Eye },
  { number: "5★", label: "Rating Rata-rata", icon: Star }
];

export const testimonials = [
  {
    name: "Dr. Ahmad Wijaya",
    role: "CTO, TechCorp Indonesia",
    content: "CyberGuard Pro telah mengubah cara kami memandang keamanan siber. Sistem AI mereka berhasil mencegah 15 serangan dalam bulan pertama implementasi.",
    rating: 5
  },
  {
    name: "Sarah Putri",
    role: "IT Manager, StartupXYZ",
    content: "Interface yang user-friendly dan monitoring real-time membuat tim kami dapat merespons ancaman dengan cepat. Highly recommended!",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Founder, DigitalSafe",
    content: "Sebagai startup fintech, keamanan adalah prioritas utama. CyberGuard Pro memberikan peace of mind yang kami butuhkan untuk fokus pada growth.",
    rating: 5
  }
];

export const footerLinks = {
  produk: [
    { id: 'features', label: 'Fitur' },
    { id: 'stats', label: 'Statistik' },
    { id: 'topology', label: 'Topologi' },
    { id: 'social-proof', label: 'Testimoni' },
  ],

  support: [
    { id: 'contact', label: 'Help Center' },
    { id: 'contact', label: 'Kontak' },
    { id: 'cta', label: 'Status' },
  ],
  legal: [
      { id: 'hero', label: 'Privacy Policy' },
      { id: 'hero', label: 'Terms of Service' },
      { id: 'hero', label: 'Download Full Source Code', href: 'https://github.com/InMyMine7/landing_page_tugas_uas' },
  ]
};

export const attackData = [
  { name: 'Malware', value: 450, fill: '#ec4899' },
  { name: 'Phishing', value: 320, fill: '#e879f9' },
  { name: 'Ransomware', value: 280, fill: '#c084fc' },
  { name: 'DDoS', value: 190, fill: '#818cf8' },
  { name: 'Web Attack', value: 150, fill: '#60a5fa' },
  { name: 'Lainnya', value: 90, fill: '#38bdf8' },
];
