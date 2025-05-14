import { cn } from "@/lib/utils"
import Image from "next/image"
import BookCoverSvg from "./BookCoverSvg"

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide"

const variantStyles: Record<BookCoverVariant, string> = { 
    extraSmall: "book-cover_extra_small", small: "book-cover_small", medium: "book-cover_medium", regular: "book-cover_regular", wide: "book-cover_wide" 
}

interface Props { 
    variant?: BookCoverVariant, className?: string, coverColor: string, coverImage: string
}

const BookCover = ({ variant = "medium", className, coverColor = "#012b48", coverImage = "https://placehold.co/400x600.png" }: Props) => (
    <div className={cn("relative transition-all duration-300", variantStyles[variant], className)}>
        <BookCoverSvg coverColor={ coverColor } />
        <div className={"absolute z-10 left-[12%] w-[87.5%] h-[88%]"}>
            <Image className="rounded-sm object-fill" src={ coverImage } alt="Book cover" fill />
        </div>
    </div>
)

export default BookCover