import artworks from "data/artwork.json";
import {Thumbnail} from "./Thumbnail";

export const GallerySet = ({set}) => {
  const setItems = artworks.filter((item) => {
    return item.field_set?.name === set;
  })

  return (
    <div className="bg-slate-700 py-8 pb-20">
      <div className="container">
        <h2 className="text-white" id={encodeURIComponent(set)}>Series</h2>
        <div className="grid grid-cols-3 gap-6">
          {setItems.map((item) => (
            <Thumbnail key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
