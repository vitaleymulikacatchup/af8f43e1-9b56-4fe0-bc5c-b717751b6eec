"use client";

import { memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaContent from "@/components/shared/MediaContent";
import { usePrevNextButtons } from "@/components/cardStack/hooks/usePrevNextButtons";
import { cls } from "@/lib/utils";

interface ProductDetailGalleryProps {
    images: { src: string; alt: string }[];
    className?: string;
}

const ProductDetailGallery = ({
    images,
    className = "",
}: ProductDetailGalleryProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className={cls("relative w-full aspect-square", className)}>
            <div className="relative overflow-hidden rounded-theme-capped cursor-grab h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((image, index) => (
                        <div key={index} className="flex-none w-full min-w-0 h-full">
                            <MediaContent
                                imageSrc={image.src}
                                imageAlt={image.alt}
                                imageClassName="w-full h-full object-cover rounded-none!"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex justify-start gap-5" >
                <button
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="secondary-button h-8 aspect-square flex items-center justify-center rounded-theme cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-[40%] w-auto aspect-square text-foreground" />
                </button>
                <button
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="secondary-button h-8 aspect-square flex items-center justify-center rounded-theme cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-[40%] w-auto aspect-square text-foreground" />
                </button>
            </div>
        </div>
    );
};

ProductDetailGallery.displayName = "ProductDetailGallery";

export default memo(ProductDetailGallery);
