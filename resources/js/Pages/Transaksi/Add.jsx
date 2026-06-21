import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Add = ({ reservasi = [] }) => {
    const { data, setData, post, processing, errors } = useForm({
        reservasi_id: "",
        lama_menginap: "",
        harga_per_malam: "",
        total_harga: "",
        metode_pembayaran: "",
        status_pembayaran: "belum_bayar",
        tanggal_bayar: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("transaksi.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Transaksi
                </h2>
            }
        >
            <Head title="Tambah Transaksi" />
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Formulir Transaksi
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Isi form di bawah untuk membuat transaksi baru.
                    </p>
                </div>

                <div className="bg-white shadow-sm rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <Link
                            href={route("transaksi.index")}
                            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                ></path>
                            </svg>
                            Kembali ke Daftar Transaksi
                        </Link>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="reservasi_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Kode Reservasi
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="reservasi_id"
                                        value={data.reservasi_id}
                                        onChange={(e) =>
                                            setData(
                                                "reservasi_id",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.reservasi_id
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="">
                                            -- Pilih Reservasi --
                                        </option>
                                        {reservasi.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.kode} - {item.tamu?.nama}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.reservasi_id && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.reservasi_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="lama_menginap"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Lama Menginap (malam)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        id="lama_menginap"
                                        value={data.lama_menginap}
                                        onChange={(e) =>
                                            setData(
                                                "lama_menginap",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.lama_menginap
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.lama_menginap && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.lama_menginap}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="harga_per_malam"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Harga per Malam
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        id="harga_per_malam"
                                        value={data.harga_per_malam}
                                        onChange={(e) =>
                                            setData(
                                                "harga_per_malam",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.harga_per_malam
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.harga_per_malam && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.harga_per_malam}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="total_harga"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Total Harga
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        id="total_harga"
                                        value={data.total_harga}
                                        onChange={(e) =>
                                            setData(
                                                "total_harga",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.total_harga
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.total_harga && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.total_harga}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="metode_pembayaran"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Metode Pembayaran
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="metode_pembayaran"
                                        value={data.metode_pembayaran}
                                        onChange={(e) =>
                                            setData(
                                                "metode_pembayaran",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.metode_pembayaran
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
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
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.metode_pembayaran}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="status_pembayaran"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status Pembayaran
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="status_pembayaran"
                                        value={data.status_pembayaran}
                                        onChange={(e) =>
                                            setData(
                                                "status_pembayaran",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.status_pembayaran
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="belum_bayar">
                                            Belum Bayar
                                        </option>
                                        <option value="lunas">Lunas</option>
                                    </select>
                                    {errors.status_pembayaran && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.status_pembayaran}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="tanggal_bayar"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal Bayar
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        id="tanggal_bayar"
                                        value={data.tanggal_bayar}
                                        onChange={(e) =>
                                            setData(
                                                "tanggal_bayar",
                                                e.target.value,
                                            )
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.tanggal_bayar
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.tanggal_bayar && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.tanggal_bayar}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t border-gray-200">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 disabled:opacity-50"
                                >
                                    {processing && (
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Add;
