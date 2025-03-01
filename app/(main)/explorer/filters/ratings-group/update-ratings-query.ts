export function updateRatingsQuery(
    currentRating: string,
    newRating: string
) {
    // Toggle the rating: select/deselect
    return currentRating === newRating ? '' : newRating;
}