import React from "react";
import { useForm, Link } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const Update = ({ kamar, jenisKamar = [] }) => {
    const { data, setData, put, processing, errors } = useForm({
        nomor_kamar: kamar?.nomor_kamar || "",
        jenis_kamar_id: kamar?.jenis_kamar_id || "",
        status: kamar?.status || "tersedia",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("user.kamar.update", kamar.id));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Update Kamar
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Ubah informasi kamar hotel.
                        </p>
                    </div>

                    <Link
                        href={route("user.kamar.list")}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                    >
                        Kembali
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b px-6 py-4">
                        <h2 className="font-semibold text-gray-800">
                            Form Update Kamar
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nomor Kamar
                            </label>

                            <input
                                type="text"
                                value={data.nomor_kamar}
                                onChange={(e) =>
                                    setData("nomor_kamar", e.target.value)
                                }
                                className="w-full rounded-lg border-gray-300"
                            />

                            {errors.nomor_kamar && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.nomor_kamar}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Jenis Kamar
                            </label>

                            <select
                                value={data.jenis_kamar_id}
                                onChange={(e) =>
                                    setData("jenis_kamar_id", e.target.value)
                                }
                                className="w-full rounded-lg border-gray-300"
                            >
                                <option value="">Pilih Jenis Kamar</option>

                                {jenisKamar.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.kode} - {item.nama}
                                    </option>
                                ))}
                            </select>

                            {errors.jenis_kamar_id && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.jenis_kamar_id}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>

                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="w-full rounded-lg border-gray-300"
                            >
                                <option value="tersedia">Tersedia</option>
                                <option value="terisi">Terisi</option>
                                <option value="maintenance">Maintenance</option>
                            </select>

                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.status}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 border-t pt-4">
                            <Link
                                href={route("user.kamar.list")}
                                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                            >
                                Batal
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg disabled:opacity-50"
                            >
                                {processing ? "Menyimpan..." : "Update Kamar"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
