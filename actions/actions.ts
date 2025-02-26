'use server'

import { auth } from "@clerk/nextjs/server"
import { adminDb } from "../firebase-admin"

export async function createNewDocument () {
    // si intento clickear el boton de new document sin estar logueado, me manda a loguear antes de hacer la accion
    const {redirectToSignIn, userId} = await auth()
    if (!userId) return redirectToSignIn()

    // estas sessionClaims serian las sessions creadas en clerk que me dejara adquirir los datos especificos (de la persona logueada) que yo necesite. lo configuro en clerk directamente
    const {sessionClaims} = await auth()

    // creo la coleccion documents 
    const docCollectionRef = adminDb.collection('documents')

    // de una vez obtengo la referencia de donde estoy y le anado el title, cada vez que cree un documento, se anadira ese titulo
    const docRef = await docCollectionRef.add({
        title: 'New Doc'
    })

    // aqui anado al usuario logueado, que ha creado el documento, a una room.
    // sessionClaims me da un error de tipado, tengo que extenderlo globalmente (archivo globals.d.ts) para poder quitar ese error
    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id
    })

    return {docId: docRef.id}
}