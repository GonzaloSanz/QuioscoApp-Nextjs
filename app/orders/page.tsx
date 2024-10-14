"use client"

import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";

const OrdersPage = () => {
    const url = '/orders/api';
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data);

    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000, // 1 minuto de revalidación
        revalidateOnFocus: false
    });

    if (isLoading) return <p>Cargando...</p>;

    if (data) return (
        <>
            <h1 className="text-center mt-10 text-6xl font-black">Órdenes Listas</h1>
            <Logo />

            {data.length ? (
                <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto my-10">
                    {data.map(order => (
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center my-10">No hay órdenes listas</p>
            )}
        </>
    )
}

export default OrdersPage;