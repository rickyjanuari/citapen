// app/data/regions.ts

// Definisi tipe data
export type Province = {
    id: string;
    name: string;
  };
  
  export type Regency = {
    id: string;
    provinceId: string;
    name: string;
  };
  
  export type District = {
    id: string;
    regencyId: string;
    name: string;
  };
  
  export type Village = {
    id: string;
    districtId: string;
    name: string;
  };
  
  // Data Provinsi
  export const provinces: Province[] = [
    { id: "10", name: "Jawa Barat" },
    { id: "11", name: "Jawa Tengah" },
    { id: "12", name: "Jawa Timur" },
    { id: "13", name: "DKI Jakarta" },
    { id: "14", name: "DI Yogyakarta" },
    { id: "15", name: "Banten" },
    // Tambahkan provinsi lain sesuai kebutuhan
  ];
  
  // Data Kabupaten/Kota
  export const regencies: Regency[] = [
    // Jawa Barat
    { id: "1001", provinceId: "10", name: "Kota Bandung" },
    { id: "1002", provinceId: "10", name: "Kabupaten Bandung" },
    { id: "1003", provinceId: "10", name: "Kabupaten Bandung Barat" },
    { id: "1004", provinceId: "10", name: "Kota Cimahi" },
    { id: "1005", provinceId: "10", name: "Kabupaten Garut" },
    { id: "1006", provinceId: "10", name: "Kabupaten Sumedang" },
    { id: "1007", provinceId: "10", name: "Kabupaten Tasikmalaya" },
    { id: "1008", provinceId: "10", name: "Kota Tasikmalaya" },
    
    // Jakarta
    { id: "1301", provinceId: "13", name: "Jakarta Pusat" },
    { id: "1302", provinceId: "13", name: "Jakarta Utara" },
    { id: "1303", provinceId: "13", name: "Jakarta Barat" },
    { id: "1304", provinceId: "13", name: "Jakarta Selatan" },
    { id: "1305", provinceId: "13", name: "Jakarta Timur" },
    { id: "1306", provinceId: "13", name: "Kepulauan Seribu" },
    
    // Tambahkan kabupaten/kota lain sesuai kebutuhan
  ];
  
  // Data Kecamatan (untuk Bandung saja sebagai contoh)
  export const districts: District[] = [
    // Kota Bandung
    { id: "100101", regencyId: "1001", name: "Bandung Kulon" },
    { id: "100102", regencyId: "1001", name: "Babakan Ciparay" },
    { id: "100103", regencyId: "1001", name: "Bojongloa Kaler" },
    { id: "100104", regencyId: "1001", name: "Bojongloa Kidul" },
    { id: "100105", regencyId: "1001", name: "Astanaanyar" },
    { id: "100106", regencyId: "1001", name: "Regol" },
    { id: "100107", regencyId: "1001", name: "Lengkong" },
    { id: "100108", regencyId: "1001", name: "Bandung Kidul" },
    { id: "100109", regencyId: "1001", name: "Buahbatu" },
    { id: "100110", regencyId: "1001", name: "Rancasari" },
    
    // Kabupaten Bandung Barat
    { id: "100301", regencyId: "1003", name: "Padalarang" },
    { id: "100302", regencyId: "1003", name: "Cikalongwetan" },
    { id: "100303", regencyId: "1003", name: "Cililin" },
    { id: "100304", regencyId: "1003", name: "Ngamprah" },
    { id: "100305", regencyId: "1003", name: "Batujajar" },
    
    // Kota Cimahi
    { id: "100401", regencyId: "1004", name: "Cimahi Utara" },
    { id: "100402", regencyId: "1004", name: "Cimahi Tengah" },
    { id: "100403", regencyId: "1004", name: "Cimahi Selatan" },
    
    // Tambahkan kecamatan lain sesuai kebutuhan
  ];
  
  // Data Kelurahan/Desa (contoh untuk beberapa kecamatan di Bandung)
  export const villages: Village[] = [
    // Bandung Kulon
    { id: "10010101", districtId: "100101", name: "Warung Muncang" },
    { id: "10010102", districtId: "100101", name: "Cibuntu" },
    { id: "10010103", districtId: "100101", name: "Cijerah" },
    { id: "10010104", districtId: "100101", name: "Cigondewah Kaler" },
    
    // Padalarang
    { id: "10030101", districtId: "100301", name: "Kertajaya" },
    { id: "10030102", districtId: "100301", name: "Jayamekar" },
    { id: "10030103", districtId: "100301", name: "Padalarang" },
    { id: "10030104", districtId: "100301", name: "Ciburuy" },
    
    // Tambahkan kelurahan/desa lain sesuai kebutuhan
  ];
  
  // Helper functions
  export function getRegenciesByProvince(provinceId: string) {
    return regencies.filter(regency => regency.provinceId === provinceId);
  }
  
  export function getDistrictsByRegency(regencyId: string) {
    return districts.filter(district => district.regencyId === regencyId);
  }
  
  export function getVillagesByDistrict(districtId: string) {
    return villages.filter(village => village.districtId === districtId);
  }
  
  export function generateSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  // Target cities for initial focus
  export const targetCities = [
    { name: "Bandung", slug: "bandung" },
    { name: "Bandung Barat", slug: "bandung-barat" },
    { name: "Cimahi", slug: "cimahi" },
    { name: "Padalarang", slug: "padalarang" }
  ];