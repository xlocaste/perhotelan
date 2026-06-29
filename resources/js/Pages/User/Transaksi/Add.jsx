import React, { useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const Add = ({ reservasi = [] }) => {
    const { data, setData, post, processing, errors } = useForm({
        reservasi_id: "",
        lama_menginap: "",
        harga_per_malam: "",
        total_harga: "",
        metode_pembayaran: "",
        status_pembayaran: "",
        tanggal_bayar: "",
    });

    useEffect(() => {
        if (data.lama_menginap && data.harga_per_malam) {
            setData(
                "total_harga",
                Number(data.lama_menginap) * Number(data.harga_per_malam)
            );
        }
    }, [data.lama_menginap, data.harga_per_malam]);

    const handleReservasiChange = (e) => {
        const reservasiId = e.target.value;

        const selectedReservasi = reservasi.find(
            (item) => item.id == reservasiId
        );

        setData("reservasi_id", reservasiId);

        if (selectedReservasi) {
            setData(
                "harga_per_malam",
                selectedReservasi.kamar?.jenis_kamar?.harga || 0
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.transaksi.storeUser"));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Tambah Transaksi
                        </h1>
                        <p className="text-sm text-gray-500">
                            Input data transaksi pembayaran.
                        </p>
                    </div>

                    <Link
                        href={route("user.transaksi.indexUser")}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Kembali
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow border">
                    <div className="p-6">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Reservasi
                                </label>

                                <select
                                    value={data.reservasi_id}
                                    onChange={handleReservasiChange}
                                    className="w-full rounded-lg border-gray-300"
                                >
                                    <option value="">
                                        -- Pilih Reservasi --
                                    </option>

                                    {reservasi.map((item) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.tamu?.user?.name} -
                                            Kamar {item.kamar?.nomor_kamar}
                                        </option>
                                    ))}
                                </select>

                                {errors.reservasi_id && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.reservasi_id}
                                    </p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Lama Menginap (Malam)
                                    </label>

                                    <input
                                        type="number"
                                        value={data.lama_menginap}
                                        onChange={(e) =>
                                            setData(
                                                "lama_menginap",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    />

                                    {errors.lama_menginap && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.lama_menginap}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Harga Per Malam
                                    </label>

                                    <input
                                        type="number"
                                        value={data.harga_per_malam}
                                        onChange={(e) =>
                                            setData(
                                                "harga_per_malam",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    />

                                    {errors.harga_per_malam && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.harga_per_malam}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Total Harga
                                </label>

                                <input
                                    type="number"
                                    value={data.total_harga}
                                    onChange={(e) =>
                                        setData(
                                            "total_harga",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border-gray-300"
                                />

                                {errors.total_harga && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.total_harga}
                                    </p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Metode Pembayaran
                                    </label>

                                    <select
                                        value={data.metode_pembayaran}
                                        onChange={(e) =>
                                            setData(
                                                "metode_pembayaran",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    >
                                        <option value="">
                                            -- Pilih Metode --
                                        </option>
                                        <option value="cash">Cash</option>
                                        <option value="transfer">
                                            Transfer
                                        </option>
                                        <option value="qris">QRIS</option>
                                    </select>

                                    {errors.metode_pembayaran && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.metode_pembayaran}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Status Pembayaran
                                    </label>

                                    <select
                                        value={data.status_pembayaran}
                                        onChange={(e) =>
                                            setData(
                                                "status_pembayaran",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    >
                                        <option value="">
                                            -- Pilih Status --
                                        </option>
                                        <option value="lunas">
                                            Lunas
                                        </option>
                                        <option value="belum_lunas">
                                            Belum Lunas
                                        </option>
                                    </select>

                                    {errors.status_pembayaran && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.status_pembayaran}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Tanggal Bayar
                                </label>

                                <input
                                    type="date"
                                    value={data.tanggal_bayar}
                                    onChange={(e) =>
                                        setData(
                                            "tanggal_bayar",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border-gray-300"
                                />

                                {errors.tanggal_bayar && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.tanggal_bayar}
                                    </p>
                                )}
                            </div>

                            <div className="border-t pt-4 flex justify-end gap-3">
                                <Link
                                    href={route("user.transaksi.indexUser")}
                                    className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                >
                                    Batal
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Transaksi"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
