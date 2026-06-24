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

        console.log("isFrontOffice", isFrontOffice);
        console.log("role", auth?.role);

        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <div className="max-w-4xl mx-auto py-8 px-4">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Booking Kamar
                            </h1>
                            <p className="text-sm text-gray-500">
                                Silahkan pilih kamar yang tersedia.
                            </p>
                        </div>

                        <Link
                            href={route("user.kamar.list")}
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
                                {isFrontOffice && (
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Tamu
                                        </label>

                                        <select
                                            value={data.tamu_id}
                                            onChange={(e) =>
                                                setData("tamu_id", e.target.value)
                                            }
                                            className="w-full rounded-lg border-gray-300"
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

                                        {errors.tamu_id && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.tamu_id}
                                            </p>
                                        )}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Kamar
                                    </label>

                                    <select
                                        value={data.kamar_id}
                                        onChange={(e) =>
                                            setData("kamar_id", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    >
                                        <option value="">
                                            -- Pilih Kamar --
                                        </option>

                                        {kamar
                                            .filter(
                                                (item) =>
                                                    item.status === "tersedia"
                                            )
                                            .map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    Kamar {item.nomor_kamar} -{" "}
                                                    {item.jenis_kamar?.nama} - Rp{" "}
                                                    {Number(
                                                        item.jenis_kamar?.harga || 0
                                                    ).toLocaleString("id-ID")}
                                                </option>
                                            ))}
                                    </select>

                                    {errors.kamar_id && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.kamar_id}
                                        </p>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Check In
                                        </label>

                                        <input
                                            type="date"
                                            value={data.check_in}
                                            onChange={(e) =>
                                                setData(
                                                    "check_in",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border-gray-300"
                                        />

                                        {errors.check_in && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.check_in}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Check Out
                                        </label>

                                        <input
                                            type="date"
                                            value={data.check_out}
                                            onChange={(e) =>
                                                setData(
                                                    "check_out",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border-gray-300"
                                        />

                                        {errors.check_out && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.check_out}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t pt-4 flex justify-end gap-3">
                                    <Link
                                        href={route("user.kamar.list")}
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
