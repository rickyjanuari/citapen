// app/lib/regionsData.ts
import { 
    provinces, 
    regencies, 
    districts, 
    villages, 
    getRegenciesByProvince, 
    getDistrictsByRegency, 
    getVillagesByDistrict, 
    generateSlug
  } from '~/data/regions';
  
  // Export data provinsi, kabupaten/kota, kecamatan, dan desa
  export { 
    provinces, 
    regencies, 
    districts, 
    villages, 
    getRegenciesByProvince, 
    getDistrictsByRegency, 
    getVillagesByDistrict, 
    generateSlug 
  };
  
  // Menyiapkan data untuk kota-kota target awal
  export const targetCities = [
    { name: 'Bandung', slug: 'bandung' },
    { name: 'Bandung Barat', slug: 'bandung-barat' },
    { name: 'Cimahi', slug: 'cimahi' },
    { name: 'Padalarang', slug: 'padalarang' }
  ];
  
  // Data layanan
  export const services = [
    {
      id: 'saluran-mampet',
      name: 'Saluran Mampet',
      description: 'Mengatasi saluran air yang tersumbat atau mampet dengan peralatan modern dan teknik profesional.',
      icon: '🚿',
      price: 'Rp150.000 - Rp300.000',
      estimatedTime: '1-4 jam'
    },
    {
      id: 'kloset-mampet',
      name: 'Kloset Mampet',
      description: 'Perbaikan dan pembersihan kloset yang tersumbat dengan metode yang bersih dan efektif.',
      icon: '🚽',
      price: 'Rp200.000',
      estimatedTime: '1-3 jam'
    },
    {
      id: 'wastafel-mampet',
      name: 'Wastafel Mampet',
      description: 'Perbaikan dan pemasangan bak cuci piring dan wastafel yang bocor atau tersumbat.',
      icon: '🧼',
      price: 'Rp150.000',
      estimatedTime: '1-2 jam'
    },
    {
      id: 'saluran-kamar-mandi',
      name: 'Saluran Kamar Mandi',
      description: 'Perbaikan untuk semua jenis saluran di kamar mandi yang mengalami masalah.',
      icon: '🛁',
      price: 'Rp150.000 - Rp250.000',
      estimatedTime: '1-3 jam'
    },
    {
      id: 'kran-mampet',
      name: 'Kran Mampet',
      description: 'Perbaikan dan penggantian kran air yang rusak, bocor, atau tersumbat.',
      icon: '🚰',
      price: 'Rp100.000 + Harga Kran',
      estimatedTime: '30-60 menit'
    },
    {
      id: 'kuras-toren',
      name: 'Kuras Toren',
      description: 'Layanan pembersihan dan perawatan tangki air (toren) untuk menjaga kualitas air di rumah Anda.',
      icon: '💧',
      price: 'Rp350.000',
      estimatedTime: '3-5 jam'
    }
  ];
  
  // FAQ data
  export const faqs = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk memperbaiki saluran mampet?',
      answer: 'Waktu perbaikan tergantung pada tingkat keparahan masalah. Untuk saluran mampet ringan, kami biasanya membutuhkan waktu 1-2 jam. Untuk kasus yang lebih parah atau kompleks, seperti saluran utama yang tersumbat, mungkin membutuhkan waktu 3-5 jam. Tim kami selalu berusaha menyelesaikan masalah secepat mungkin tanpa mengorbankan kualitas.'
    },
    {
      question: 'Apakah layanan tersedia 24 jam?',
      answer: 'Ya, kami menyediakan layanan darurat 24/7 untuk masalah plumbing yang mendesak. Untuk layanan non-darurat, jam operasional kami adalah dari Senin hingga Sabtu, pukul 08.00 - 20.00 WIB.'
    },
    {
      question: 'Apakah ada garansi untuk pekerjaan yang dilakukan?',
      answer: 'Tentu saja! Kami memberikan garansi 30 hari untuk setiap pekerjaan yang kami lakukan. Jika masalah yang sama muncul kembali dalam periode tersebut, kami akan memperbaikinya tanpa biaya tambahan. Kami percaya pada kualitas layanan kami dan kepuasan pelanggan adalah prioritas utama.'
    },
    {
      question: 'Mengapa saluran sering tersumbat saat musim hujan?',
      answer: 'Pada musim hujan, volume air yang tinggi sering membawa material seperti daun, tanah, dan sampah yang dapat menyumbat saluran. Selain itu, banyak area memiliki sistem drainase yang sudah tua dan membutuhkan perawatan rutin.'
    }
  ];