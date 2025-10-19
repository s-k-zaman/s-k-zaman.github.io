import { Gallery, Item } from "react-photoswipe-gallery";
import type { GalleryProps } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { DataSourceArray } from "photoswipe";

export type Image = {
  original: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  thumbnail?: string;
};

export default function ImageGallery({ images }: { images: Image[] }) {
  if (!images || images.length === 0) return null;

  const firstImage = images[0];

  // Only show thumbnails UI when we have more than 1 image
  // @ts-ignore
  const thumbnailsIndicator: GalleryProps["uiElement"] =
    images.length > 1
      ? {
          name: "thumbnailsIndicator",
          order: 9,
          isButton: false,
          appendTo: "wrapper",
          //@ts-ignore
          onInit: (el, pswpInstance) => {
            let prevIndex = -1;
            const thumbnails: HTMLElement[] = [];

            // container styling
            Object.assign(el.style, {
              position: "absolute",
              bottom: "20px",
              left: "0",
              right: "0",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              zIndex: "100",
            });

            const dataSource = pswpInstance.options
              .dataSource as DataSourceArray;

            for (let i = 0; i < dataSource.length; i++) {
              const slideData = dataSource[i];

              const wrapper = document.createElement("div");
              Object.assign(wrapper.style, {
                width: "40px",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                flexShrink: "0",
              });

              const img = document.createElement("img");
              img.src = slideData.msrc || "";
              Object.assign(img.style, {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: "0.6",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transformOrigin: "center center",
              });

              wrapper.appendChild(img);
              el.appendChild(wrapper);
              thumbnails.push(img);

              wrapper.onclick = () => pswpInstance.goTo(i);
            }

            pswpInstance.on("change", () => {
              if (prevIndex >= 0) {
                const prevImg = thumbnails[prevIndex];
                prevImg.style.opacity = "0.6";
                prevImg.style.transform = "scale(1)";
              }

              const currentImg = thumbnails[pswpInstance.currIndex];
              currentImg.style.opacity = "1";
              currentImg.style.transform = "scale(1.15)";

              prevIndex = pswpInstance.currIndex;
            });
          },
        }
      : null;

  // @ts-ignore
  const captionUiElement: GalleryProps["uiElement"] = {
    name: "topCaption",
    order: 10, // after main image
    isButton: false,
    appendTo: "wrapper",
    //@ts-ignore
    onInit: (el, pswp) => {
      // ✅ Always reset innerHTML & apply styles safely
      el.innerHTML = "";
      Object.assign(el.style, {
        position: "absolute",
        top: "10px",
        left: "0",
        right: "0",
        textAlign: "center",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        padding: "4px 10px",
        zIndex: "100",
        pointerEvents: "none",
        transition: "opacity 0.3s ease",
      });

      const updateCaption = () => {
        const currSlide = pswp.currSlide;
        const caption = currSlide?.data?.caption || "";
        el.innerHTML = caption;
      };

      // ✅ Make sure these events exist before binding
      pswp.on("change", updateCaption);
      pswp.on("afterInit", updateCaption);
    },
  };

  return (
    <Gallery
      // withCaption
      options={{
        showHideAnimationType: images.length === 1 ? "zoom" : "fade", // "zoom" not looking good for hidden images
        zoom: true,
        wheelToZoom: true,
        secondaryZoomLevel: 1.2,
        maxZoomLevel: 2,
        padding: { top: 40, bottom: 40, left: 20, right: 20 },
        // TODO: its not working
        initialZoomLevel: 0.7,
        sinitialZoomLevel: (zoomLevelObject) => {
          const { itemData, fit, pswp } = zoomLevelObject;
          const imageWidth = itemData.width;
          const imageHeight = itemData.height;
          const vw = pswp?.viewportSize.x;
          const vh = pswp?.viewportSize.y;
          if (!vw || !vh || !imageWidth || !imageHeight) return fit;
          // If image is smaller than 80% of viewport → keep it natural size (zoom = 1)
          const fitsViewport = imageWidth < vw * 0.8 && imageHeight < vh * 0.8;
          return fitsViewport ? 1 : fit; // 1 = natural size, fit = default “fit to screen”
        },
      }}
      uiElements={[captionUiElement, thumbnailsIndicator].filter(Boolean)}
    >
      <div className="flex justify-center">
        {/* Only show the first image as preview */}
        <Item
          original={firstImage.original}
          thumbnail={firstImage.thumbnail || firstImage.original}
          alt={firstImage.alt}
          width={firstImage.width || 1024}
          height={firstImage.height || 768}
          caption={firstImage.caption || " "}
        >
          {({ ref, open }) => (
            <div
              className="relative h-64 aspect-video cursor-pointer overflow-hidden rounded-[5px] shadow-lg"
              onClick={open}
            >
              <img
                ref={ref}
                src={firstImage.thumbnail || firstImage.original}
                alt="Preview"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Optional overlay indicator */}
              {images.length > 1 && (
                <div className="absolute bottom-2 right-2 rounded-lg bg-black/60 px-2 py-1 text-base text-white">
                  +{images.length - 1} more
                </div>
              )}
            </div>
          )}
        </Item>

        {/* Hidden items for the gallery (they won’t render visibly) */}
        {images.length > 1 &&
          images.slice(1).map((img, index) => (
            <Item
              key={index}
              original={img.original}
              thumbnail={img.thumbnail || img.original}
              alt={img.alt}
              width={img.width || 1024}
              height={img.height || 768}
              caption={img.caption || " "}
            >
              {({ ref }) => (
                <img
                  ref={ref}
                  src={img.thumbnail || img.original}
                  alt=""
                  className="hidden"
                />
              )}
            </Item>
          ))}
      </div>
    </Gallery>
  );
}
