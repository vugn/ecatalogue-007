import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, User, Mail, Phone, Calendar, DollarSign, Award } from 'lucide-react';

interface WorkforceDetailProps {
  selectedWorker: string;
  onBack: () => void;
  onWorkerSelect: (workerId: string) => void;
}

const WorkforceDetail: React.FC<WorkforceDetailProps> = ({ selectedWorker, onBack, onWorkerSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const employees = [
    {
      id: '001',
      name: 'Ahmad Rizki Pratama',
      position: 'Security Supervisor',
      department: 'security',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'ahmad.rizki@unit007bjm.com',
      phone: '+62 812 3456 7890',
      joinDate: '15 Januari 2020',
      salary: 'Rp 4.500.000',
      experience: '8 tahun',
      certifications: ['Sertifikat Security Level 3', 'K3 Umum', 'First Aid'],
      education: 'SMK Keamanan',
      status: 'Aktif'
    },
    {
      id: '002',
      name: 'Siti Nurhaliza',
      position: 'Cleaning Supervisor',
      department: 'cleaning',
      photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'siti.nurhaliza@unit007bjm.com',
      phone: '+62 813 4567 8901',
      joinDate: '20 Februari 2020',
      salary: 'Rp 3.800.000',
      experience: '6 tahun',
      certifications: ['Sertifikat Cleaning Professional', 'Sanitasi & Hygiene', 'K3'],
      education: 'D3 Kesehatan Lingkungan',
      status: 'Aktif'
    },
    {
      id: '003',
      name: 'Budi Santoso',
      position: 'Sales Manager',
      department: 'sales',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'budi.santoso@unit007bjm.com',
      phone: '+62 814 5678 9012',
      joinDate: '10 Maret 2020',
      salary: 'Rp 6.200.000',
      experience: '10 tahun',
      certifications: ['Certified Sales Professional', 'Digital Marketing', 'Leadership'],
      education: 'S1 Manajemen',
      status: 'Aktif'
    },
    {
      id: '004',
      name: 'Dewi Kartika',
      position: 'Security Guard',
      department: 'security',
      photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'dewi.kartika@unit007bjm.com',
      phone: '+62 815 6789 0123',
      joinDate: '25 April 2020',
      salary: 'Rp 3.200.000',
      experience: '4 tahun',
      certifications: ['Sertifikat Security Level 2', 'K3 Umum'],
      education: 'SMA',
      status: 'Aktif'
    },
    {
      id: '005',
      name: 'Andi Wijaya',
      position: 'Cleaning Staff',
      department: 'cleaning',
      photo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'andi.wijaya@unit007bjm.com',
      phone: '+62 816 7890 1234',
      joinDate: '15 Mei 2020',
      salary: 'Rp 2.800.000',
      experience: '3 tahun',
      certifications: ['Basic Cleaning', 'K3 Umum'],
      education: 'SMA',
      status: 'Aktif'
    },
    {
      id: '006',
      name: 'Maya Sari',
      position: 'Sales Representative',
      department: 'sales',
      photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'maya.sari@unit007bjm.com',
      phone: '+62 817 8901 2345',
      joinDate: '30 Juni 2020',
      salary: 'Rp 4.000.000',
      experience: '5 tahun',
      certifications: ['Sales Certification', 'Customer Service'],
      education: 'D3 Marketing',
      status: 'Aktif'
    },
    {
      id: '007',
      name: 'Rudi Hermawan',
      position: 'Admin Manager',
      department: 'admin',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'rudi.hermawan@unit007bjm.com',
      phone: '+62 818 9012 3456',
      joinDate: '10 Juli 2020',
      salary: 'Rp 5.500.000',
      experience: '12 tahun',
      certifications: ['Project Management', 'ISO 9001', 'Leadership'],
      education: 'S1 Administrasi Bisnis',
      status: 'Aktif'
    },
    {
      id: '008',
      name: 'Lina Marlina',
      position: 'HR Specialist',
      department: 'admin',
      photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'lina.marlina@unit007bjm.com',
      phone: '+62 819 0123 4567',
      joinDate: '20 Agustus 2020',
      salary: 'Rp 4.800.000',
      experience: '7 tahun',
      certifications: ['HR Professional', 'Recruitment', 'Training & Development'],
      education: 'S1 Psikologi',
      status: 'Aktif'
    }
  ];

  const departments = [
    { value: 'all', label: 'Semua Departemen' },
    { value: 'security', label: 'Keamanan' },
    { value: 'cleaning', label: 'Cleaning Service' },
    { value: 'sales', label: 'Sales & Marketing' },
    { value: 'admin', label: 'Administrasi' }
  ];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || employee.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const selectedEmployeeData = employees.find(emp => emp.id === selectedWorker);

  if (selectedWorker && selectedEmployeeData) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => onWorkerSelect('')}
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Kembali ke Daftar Karyawan</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
              <div className="flex items-center space-x-6">
                <img
                  src={selectedEmployeeData.photo}
                  alt={selectedEmployeeData.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedEmployeeData.name}</h1>
                  <p className="text-blue-100 text-lg">{selectedEmployeeData.position}</p>
                  <p className="text-blue-200">ID: {selectedEmployeeData.id}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Informasi Kontak</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-slate-500" />
                        <span className="text-slate-700">{selectedEmployeeData.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-slate-500" />
                        <span className="text-slate-700">{selectedEmployeeData.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-slate-500" />
                        <span className="text-slate-700">Bergabung: {selectedEmployeeData.joinDate}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Detail Pekerjaan</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-slate-500" />
                        <div>
                          <span className="font-medium text-slate-800">{selectedEmployeeData.salary}</span>
                          <span className="text-slate-600 ml-2">per bulan</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-slate-500" />
                        <span className="text-slate-700">Pengalaman: {selectedEmployeeData.experience}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-slate-500" />
                        <span className="text-slate-700">Pendidikan: {selectedEmployeeData.education}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Sertifikasi</h3>
                    <div className="space-y-2">
                      {selectedEmployeeData.certifications.map((cert, index) => (
                        <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                          <span className="text-blue-800 font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Status</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      {selectedEmployeeData.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Data Karyawan</h1>
            <p className="text-blue-100 text-lg">Informasi lengkap tenaga kerja Unit 007 Banjarmasin</p>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari nama atau posisi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>{dept.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => onWorkerSelect(employee.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{employee.name}</h3>
                      <p className="text-slate-600">{employee.position}</p>
                      <p className="text-sm text-slate-500">ID: {employee.id}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Gaji:</span>
                      <span className="font-medium text-slate-800">{employee.salary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Pengalaman:</span>
                      <span className="font-medium text-slate-800">{employee.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Bergabung:</span>
                      <span className="font-medium text-slate-800">{employee.joinDate}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Status:</span>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1"></div>
                        {employee.status}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>

            {filteredEmployees.length === 0 && (
              <div className="text-center py-12">
                <User className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">Tidak ada karyawan ditemukan</h3>
                <p className="text-slate-500">Coba ubah kata kunci pencarian atau filter departemen</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceDetail;