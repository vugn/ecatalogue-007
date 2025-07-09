import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyTabProps {
    caseStudy: CaseStudy;
}

const CaseStudyTab: React.FC<CaseStudyTabProps> = ({ caseStudy }) => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{caseStudy.title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {caseStudy.clientType}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {caseStudy.clientIndustry}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {caseStudy.totalHeadcount} Personel
                    </span>
                </div>
                <p className="text-slate-600">{caseStudy.description}</p>
            </div>

            {/* Images */}
            {caseStudy.images && caseStudy.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {caseStudy.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Case Study ${caseStudy.title} - Image ${index + 1}`}
                            className="rounded-lg shadow-md object-cover w-full h-60"
                        />
                    ))}
                </div>
            )}

            {/* Challenge & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-red-600 mb-4">Tantangan</h4>
                    <ul className="space-y-2">
                        {caseStudy.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-green-600 mb-4">Solusi</h4>
                    <ul className="space-y-2">
                        {caseStudy.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Results */}
            <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-600 mb-4">Hasil</h4>
                <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{result}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Shift Details */}
            <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Alokasi Personel</h4>
                <div className="space-y-6">
                    {caseStudy.shifts.map((shift, shiftIndex) => (
                        <div key={shiftIndex} className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200">
                                <div className="flex flex-wrap justify-between items-center">
                                    <h5 className="text-lg font-bold text-slate-800">
                                        Shift {shift.shiftName} <span className="text-slate-500 font-normal">({shift.shiftTime})</span>
                                    </h5>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {shift.totalHeadcount} Personel
                                    </span>
                                </div>
                                <div className="mt-2 text-sm text-slate-600">
                                    Struktur Pimpinan: {shift.leadershipStructure.join(", ")}
                                </div>
                            </div>

                            <div className="p-4">
                                <h6 className="font-medium text-slate-700 mb-2">Alokasi Personel:</h6>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-slate-200">
                                        <thead>
                                            <tr>
                                                <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Lokasi</th>
                                                <th className="px-3 py-2 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Jumlah</th>
                                                <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            {shift.allocations.map((allocation, allocIndex) => (
                                                <tr key={allocIndex} className={allocIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                    <td className="px-3 py-2 text-sm text-slate-700">{allocation.location}</td>
                                                    <td className="px-3 py-2 text-sm text-slate-700 text-center">{allocation.headcount}</td>
                                                    <td className="px-3 py-2 text-sm text-slate-600">{allocation.description || '-'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Special Teams */}
            {caseStudy.specialTeams && caseStudy.specialTeams.length > 0 && (
                <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Tim Khusus</h4>
                    <div className="space-y-6">
                        {caseStudy.specialTeams.map((team, teamIndex) => (
                            <div key={teamIndex} className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                                <div className="bg-slate-50 p-4 border-b border-slate-200">
                                    <div className="flex flex-wrap justify-between items-center">
                                        <h5 className="text-lg font-bold text-slate-800">{team.teamName}</h5>
                                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {team.totalHeadcount} Personel
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h6 className="font-medium text-slate-700 mb-2">Komposisi Tim:</h6>
                                    <div className="overflow-x-auto mb-4">
                                        <table className="min-w-full divide-y divide-slate-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Posisi</th>
                                                    <th className="px-3 py-2 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Jumlah</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {team.roles.map((role, roleIndex) => (
                                                    <tr key={roleIndex} className={roleIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                        <td className="px-3 py-2 text-sm text-slate-700">{role.title}</td>
                                                        <td className="px-3 py-2 text-sm text-slate-700 text-center">{role.headcount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <h6 className="font-medium text-slate-700 mb-2">Tanggung Jawab:</h6>
                                    <ul className="space-y-1 pl-5 list-disc text-slate-600">
                                        {team.responsibilities.map((responsibility, resIndex) => (
                                            <li key={resIndex}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Equipment */}
            {caseStudy.equipment && caseStudy.equipment.length > 0 && (
                <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Peralatan & Perlengkapan</h4>
                    <div className="space-y-6">
                        {caseStudy.equipment.map((equipCategory, catIndex) => (
                            <div key={catIndex} className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                                <div className="bg-slate-50 p-4 border-b border-slate-200">
                                    <h5 className="text-lg font-bold text-slate-800">{equipCategory.category}</h5>
                                </div>

                                <div className="p-4">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-slate-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Item</th>
                                                    <th className="px-3 py-2 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Jumlah</th>
                                                    <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Keterangan</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {equipCategory.items.map((item, itemIndex) => (
                                                    <tr key={itemIndex} className={itemIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                        <td className="px-3 py-2 text-sm text-slate-700">{item.name}</td>
                                                        <td className="px-3 py-2 text-sm text-slate-700 text-center">{item.quantity}</td>
                                                        <td className="px-3 py-2 text-sm text-slate-600">{item.description || '-'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <blockquote className="text-slate-700 italic mb-4">
                        "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                        <div className="ml-4">
                            <p className="text-sm font-bold text-slate-800">{caseStudy.testimonial.author}</p>
                            <p className="text-xs text-slate-600">{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseStudyTab;
