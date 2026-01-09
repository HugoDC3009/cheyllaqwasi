"use client"
import { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { supabase } from '../../lib/supabase'

export default function AdminPage() {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const guardarPlanta = async () => {
        const { error } = await supabase
            .from('plantas')
            .insert([{ nombre, precio: parseFloat(precio), imagen_url: imgUrl }])

        if (!error) alert("¡Planta guardada con éxito!")
    }

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Panel de Control - Chayllawasi</h1>

            <input
                placeholder="Nombre de la planta"
                className="w-full p-2 border mb-4 text-black"
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                placeholder="Precio"
                type="number"
                className="w-full p-2 border mb-4 text-black"
                onChange={(e) => setPrecio(e.target.value)}
            />

            {/* Widget de Cloudinary */}
            <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={(results: any) => setImgUrl(results.info.secure_url)}
            >
                {({ open }) => (
                    <button
                        className="bg-blue-500 text-white p-2 w-full mb-4 rounded"
                        onClick={() => open()}
                    >
                        Subir Foto de Planta
                    </button>
                )}
            </CldUploadWidget>

            {imgUrl && <p className="text-green-600 text-xs mb-4">Imagen lista: {imgUrl}</p>}

            <button
                onClick={guardarPlanta}
                className="bg-emerald-600 text-white p-3 w-full rounded-xl font-bold"
            >
                Publicar en Catálogo
            </button>
        </div>
    )
}