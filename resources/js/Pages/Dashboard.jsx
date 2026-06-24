import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ Kamar = [], Tamu = [] }) {
    const kamarTersedia = Kamar.filter(
        (item) => item.status === 'tersedia'
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">

                    {/* TABEL TAMU */}
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">
                                Data Tamu
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border px-4 py-2 text-left">
                                                No
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Nama
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                No KTP
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                No HP
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Alamat
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Tamu.length > 0 ? (
                                            Tamu.map((item, index) => (
                                                <tr
                                                    key={item.id}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {index + 1}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.user?.name}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.no_ktp}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.no_hp}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.alamat}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center py-4"
                                                >
                                                    Data tamu tidak tersedia
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* TABEL KAMAR TERSEDIA */}
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">
                                Kamar Tersedia
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border px-4 py-2 text-left">
                                                No
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Nomor Kamar
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Jenis Kamar
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Harga
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {kamarTersedia.length > 0 ? (
                                            kamarTersedia.map(
                                                (item, index) => (
                                                    <tr
                                                        key={item.id}
                                                        className="hover:bg-gray-50"
                                                    >
                                                        <td className="border px-4 py-2">
                                                            {index + 1}
                                                        </td>

                                                        <td className="border px-4 py-2">
                                                            {item.nomor_kamar}
                                                        </td>

                                                        <td className="border px-4 py-2">
                                                            {
                                                                item
                                                                    .jenis_kamar
                                                                    ?.nama
                                                            }
                                                        </td>

                                                        <td className="border px-4 py-2">
                                                            Rp{" "}
                                                            {Number(
                                                                item
                                                                    .jenis_kamar
                                                                    ?.harga || 0
                                                            ).toLocaleString(
                                                                'id-ID'
                                                            )}
                                                        </td>

                                                        <td className="border px-4 py-2">
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                                                                Tersedia
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center py-4"
                                                >
                                                    Tidak ada kamar tersedia
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
