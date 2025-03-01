import { FC } from "react";
import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";
import Checkbox from "@/ui/checkbox/Checkbox";
import { updateRatingsQuery } from "./update-ratings-query";
import { RATING_VARIANTS } from "./ratings-variants.data";
import { Rating } from "react-simple-star-rating";

const RatingGroup: FC = () => {
    const {queryParams, updateQueryParams} = useFilters()

    return (
        <FilterWrapper title="Number of reviews">
            {RATING_VARIANTS.map(rating => (
                <Checkbox
                    isChecked={queryParams.ratings === rating.toString()}
                    onClick={() => updateQueryParams(
                        'ratings',
                        updateRatingsQuery(queryParams.ratings, rating.toString())
                    )}
                    key={rating}
                    className='mb-2 text-sm'
                >
                    <Rating
                        readonly
                        initialValue={rating}
                        SVGstyle={{
                            display: 'inline-block'
                        }}
                        size={20}
                        transition
                    />
                </Checkbox>
            ))}
        </FilterWrapper>
    )
}

export default RatingGroup