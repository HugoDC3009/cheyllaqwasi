"use client"
import { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { supabase } from '../../lib/supabase'

export default function AdminPage() {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const guardarPlanta = async () => {
        if (!nombre || !precio || !imgUrl) {
            alert("Por favor rellena nombre, precio y sube una foto");
            return;
        }

        const { error } = await supabase
            .from('plantas')
            .insert([{
                nombre,
                precio: parseFloat(precio),
                descripcion,
                imagen_url: imgUrl,
                stock: true
            }])

        if (error) {
            console.error(error);
            alert("Error al guardar");
        } else {
            alert("¡Planta guardada con éxito!");
            // Limpiar formulario
            setNombre(''); setPrecio(''); setDescripcion(''); setImgUrl('');
        }
    }

    return (
        <div className="p-8 max-w-md mx-auto bg-white min-h-screen text-black">
            <h1 className="text-2xl font-bold mb-6 text-emerald-800">Administración Chayllawasi</h1>

            <div className="space-y-4">
                <input
                    placeholder="Nombre de la planta"
                    value={nombre}
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    placeholder="Precio"
                    type="number"
                    value={precio}
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setPrecio(e.target.value)}
                />

                <textarea
                    placeholder="Descripción (cuidados, origen...)"
                    value={descripcion}
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <CldUploadWidget
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    onSuccess={(results: any) => {
                        setImgUrl(results.info.secure_url);
                    }}
                >
                    {({ open }) => (
                        <button
                            type="button"
                            className="bg-blue-600 text-white p-3 w-full rounded-lg font-semibold"
                            onClick={() => open()}
                        >
                            {imgUrl ? "✅ Foto Cargada" : "📸 Subir Foto de Planta"}
                        </button>
                    )}
                </CldUploadWidget>

                <button
                    onClick={guardarPlanta}
                    className="bg-emerald-600 text-white p-4 w-full rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-colors"
                >
                    Publicar en Catálogo
                </button>
            </div>
        </div>
    )
}