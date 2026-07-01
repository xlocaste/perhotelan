import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ Kamar = [], Tamu = [] }) {
    const { auth } = usePage().props;
    const kamarTersedia = Kamar.filter((item) => item.status === "tersedia");

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-slate-800 tracking-tight">
                    Dashboard Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="w-full space-y-8 pb-8">
                {/* Welcome Hero Card */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl shadow-lg p-8 sm:p-10 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                            Selamat Datang, {auth.user.name}!
                        </h1>
                        <p className="text-indigo-100 text-lg max-w-2xl leading-relaxed">
                            Pantau ringkasan pendaftaran tamu dan ketersediaan
                            kamar hotel secara langsung dari dashboard ini.
                        </p>
                    </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex items-center justify-between group hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">
                                Total Tamu
                            </p>
                            <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {Tamu.length}
                            </h3>
                        </div>
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex items-center justify-between group hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">
                                Kamar Tersedia
                            </p>
                            <h3 className="text-3xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                {kamarTersedia.length}
                            </h3>
                        </div>
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18v8a1 1 0 01-1 1h-1v-3H5v3H4a1 1 0 01-1-1v-8zm2 0V7a2 2 0 012-2h3a2 2 0 012 2v3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Data Tamu Section */}
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 bg-white/40 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                    Data Tamu Terdaftar
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Daftar tamu yang telah terdaftar di dalam
                                    sistem hotel.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-100">
                                <thead className="bg-slate-50/80">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16">
                                            No
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Nama & Kontak
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            No KTP
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Alamat
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-slate-100 whitespace-nowrap">
                                    {Tamu.length > 0 ? (
                                        Tamu.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-slate-50/50 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    <div className="font-semibold text-slate-900">
                                                        {item.user?.name}
                                                    </div>
                                                    <div className="text-slate-500 text-xs mt-0.5">
                                                        {item.no_hp}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                                                    {item.no_ktp}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 truncate max-w-sm">
                                                    {item.alamat}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="px-6 py-16 text-center"
                                            >
                                                <div className="flex flex-col items-center justify-center text-slate-400">
                                                    <svg
                                                        className="w-16 h-16 mb-4 text-slate-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1}
                                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                        />
                                                    </svg>
                                                    <h3 className="text-lg font-medium text-slate-900">
                                                        Tidak ada tamu
                                                    </h3>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        Belum ada data tamu pada
                                                        sistem saat ini.
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Kamar Tersedia Section */}
                    <div className="bg-white shadow-sm rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 bg-white/40 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                    Kamar Tersedia
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Daftar kamar yang saat ini kosong dan siap
                                    dipesan.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-100">
                                <thead className="bg-slate-50/80">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16">
                                            No
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Kamar & Jenis
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Harga
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-slate-100 whitespace-nowrap">
                                    {kamarTersedia.length > 0 ? (
                                        kamarTersedia.map((item, index) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-slate-50/50 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    <div className="flex items-center gap-3">
                                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm ring-1 ring-indigo-100 shadow-sm">
                                                            {item.nomor_kamar}
                                                        </span>
                                                        <span className="font-semibold text-slate-800">
                                                            {
                                                                item.jenis_kamar
                                                                    ?.nama
                                                            }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold text-slate-900">
                                                    Rp{" "}
                                                    {Number(
                                                        item.jenis_kamar
                                                            ?.harga || 0,
                                                    ).toLocaleString("id-ID")}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full ring-1 ring-inset tracking-wide capitalize shadow-sm bg-emerald-50 text-emerald-700 ring-emerald-200">
                                                        Tersedia
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="px-6 py-16 text-center"
                                            >
                                                <div className="flex flex-col items-center justify-center text-slate-400">
                                                    <svg
                                                        className="w-16 h-16 mb-4 text-slate-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1}
                                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        />
                                                    </svg>
                                                    <h3 className="text-lg font-medium text-slate-900">
                                                        Semua kamar terisi
                                                    </h3>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        Semua kamar saat ini
                                                        sedang terisi atau dalam
                                                        tahap maintenance.
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
