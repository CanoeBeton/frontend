import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBoat, modifyBoat } from '../../../src/api/boat'
import { useQuery } from 'react-query'
import { Boat } from '../../../src/domain/Boat'

const BoatInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: boat, status } = useQuery({ queryFn: () => getBoat(id) })
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (boat) {
      let res = { name: boat.name } as Boat
      for (const input of e.target.form) {
        if (input.value !== '' && input.name) {
          // @ts-ignore
          res[input.name] = input.value
        } else {
          // @ts-ignore
          res[input.name] = input.placeholder
        }
      }

      modifyBoat(res)
    }
  }
  const divStyle = ' flex flex-col gap-2 justify-between no-wrap'
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'
  return (
    <div className="mt-5">
      {status === 'success' && boat ? (
        <div>
          <form className="  mx-5" id="form">
            <div className="lg:columns-3 md:columns-2">
              <div className={divStyle}>
                <p>Nom</p>
                <p className={inputStyle}>{boat.name}</p>
              </div>
              <div className={divStyle}>
                <label htmlFor="poids">Poids</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="poids"
                  id="poids"
                  placeholder={boat.poids}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="longueur">Longueur</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="longueur"
                  id="longueur"
                  placeholder={boat.longueur}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="largeur">Largeur</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="largeur"
                  id="largeur"
                  placeholder={boat.largeur}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="profondeur">Profondeur</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="profondeur"
                  id="profondeur"
                  placeholder={boat.profondeur}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="epaisseur">Epaisseur</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="epaisseur"
                  id="epaisseur"
                  placeholder={boat.epaisseur}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="couleur_exterieure">Couleur extérieure</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="couleur_exterieure"
                  id="couleur_exterieure"
                  placeholder={boat.couleur_exterieure}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="couleur_interieure">Couleur intérieure</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="couleur_interieure"
                  id="couleur_interieure"
                  placeholder={boat.couleur_interieure}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="renforcement">Renforcement</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="renforcement"
                  id="renforcement"
                  placeholder={boat.renforcement}
                />
              </div>
            </div>
            <div className="flex mt-5 justify-around">
              <button
                className="w-1/3 rounded bg-blue-500 p-2"
                onClick={handleSubmit}
              >
                Appliquer
              </button>
              <Link
                className="w-1/3 text-center rounded bg-red-500 p-2"
                href="/admin/boat"
              >
                Retour
              </Link>
              <Link
                className="w-1/5 text-center rounded bg-green-500 p-2"
                href={`/admin/boat/melange/${boat.name}`}
              >
                melange
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default BoatInfo
