import React from "react";
import { useForm, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const Add = ({ kamar = [], tamu = [] }) => {
    const { auth, tamu_id } = usePage().props;

    const isFrontOffice = auth?.role?.includes("front office");
    const isPengunjung = auth?.role?.includes("pengunjung");

    const { data, setData, post, processing, errors } = useForm({
        tamu_id: isPengunjung ? tamu_id : "",
        kamar_id: "",
        check_in: "",
        check_out: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("DATA FORM:", data);
        post(route("user.reservasi.store"));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Booking Kamar
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Silahkan isi form di bawah untuk melakukan reservasi
                        kamar.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <Link
                            href={route("user.kamar.list")}
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <svg
                                className="w-4 h-4 mr-1.5"
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
                                />
                            </svg>
                            Kembali ke Daftar Kamar
                        </Link>
                    </div>

                    <div className="p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {isFrontOffice && (
                                <div>
                                    <label
                                        htmlFor="tamu_id"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Tamu
                                    </label>

                                    <div className="mt-1">
                                        <select
                                            id="tamu_id"
                                            value={data.tamu_id}
                                            onChange={(e) =>
                                                setData(
                                                    "tamu_id",
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                                errors.tamu_id
                                                    ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                        >
                                            <option value="">
                                                -- Pilih Tamu --
                                            </option>

                                            {tamu.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.user?.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.tamu_id && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.tamu_id}
                                        </p>
                                    )}
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="kamar_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Kamar
                                </label>

                                <div className="mt-1">
                                    <select
                                        id="kamar_id"
                                        value={data.kamar_id}
                                        onChange={(e) =>
                                            setData("kamar_id", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.kamar_id
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="">
                                            -- Pilih Kamar --
                                        </option>

                                        {kamar
                                            .filter(
                                                (item) =>
                                                    item.status === "tersedia",
                                            )
                                            .map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    Kamar {item.nomor_kamar} -{" "}
                                                    {item.jenis_kamar?.nama} -
                                                    Rp{" "}
                                                    {Number(
                                                        item.jenis_kamar
                                                            ?.harga || 0,
                                                    ).toLocaleString("id-ID")}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                {errors.kamar_id && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.kamar_id}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="check_in"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Check In
                                    </label>

                                    <div className="mt-1">
                                        <input
                                            type="date"
                                            id="check_in"
                                            value={data.check_in}
                                            onChange={(e) =>
                                                setData(
                                                    "check_in",
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                                errors.check_in
                                                    ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                        />
                                    </div>
                                    {errors.check_in && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.check_in}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="check_out"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Check Out
                                    </label>

                                    <div className="mt-1">
                                        <input
                                            type="date"
                                            id="check_out"
                                            value={data.check_out}
                                            onChange={(e) =>
                                                setData(
                                                    "check_out",
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                                errors.check_out
                                                    ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                            }`}
                                        />
                                    </div>
                                    {errors.check_out && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.check_out}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row justify-end gap-3">
                                <Link
                                    href={route("user.kamar.list")}
                                    className="inline-flex justify-center items-center px-6 py-3 bg-white border border-gray-300 rounded-md font-semibold text-sm text-gray-700 uppercase tracking-widest hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                                >
                                    Batal
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex justify-center items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 disabled:opacity-50"
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
                                    {processing
                                        ? "Menyimpan..."
                                        : "Booking Sekarang"}
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
