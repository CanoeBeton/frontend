import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  getPartenaireByName,
  modifyPartenaire,
} from '../../../src/api/partenaire'
import { useQuery } from 'react-query'
import { Partenaire } from '../../../src/domain/Partenaire'
import Dropzone, { DropzoneState } from 'react-dropzone'

const PartenaireInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: partenaire, status } = useQuery({
    queryFn: () => getPartenaireByName(id),
  })

  const [image, setImage] = useState<string | null>(null)

  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setImage(reader.result as string)
    }
  }

  const dropzone = useMemo(
    () => (
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Cliquer ici ou deposer une image </p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDrop]
  )

  const handleSubmit = (e: any) => {}

  const divStyle = 'flex flex-col gap-2 justify-between '
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'

  return (
    <div className="mt-5">
      {status === 'success' && partenaire ? (
        <div>
          <form className="  mx-5" id="form">
            <div className="lg:columns-3 md:columns-2">
              <div className={divStyle}>
                <p>Nom</p>
                <p className={inputStyle}>{partenaire.name}</p>
              </div>
              <div className={divStyle}>
                <label htmlFor="type">Type</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="type"
                  id="type"
                  placeholder={partenaire.type}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="description">Description</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="description"
                  id="description"
                  placeholder={partenaire.description}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="active">Active</label>
                <input
                  className={inputStyle}
                  type="checkbox"
                  name="active"
                  id="active"
                  checked={partenaire.active}
                />
              </div>
              <div className={divStyle}>
                {dropzone}
                <p className={inputStyle}>
                  {image ? image.substring(0, 25) : '---'}
                </p>
              </div>
            </div>
            <div className="flex justify-around">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Modifier
              </button>
              <Link href="/admin/partenaire">Retour</Link>
              <button
                disabled={status !== 'success' ? true : false}
                className="w-1/5 rounded bg-green-300 p-2 disabled:bg-gray-500"
                type="button"
                onClick={() => {
                  if (partenaire) setImage(partenaire.image)
                }}
              >
                load
              </button>
            </div>
          </form>
          {image && (
            <div className="m-10">
              <p>Visualisation de l'image:</p>
              <img src={image} alt="uploaded" width={300} />
            </div>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  )
}

export default PartenaireInfo