"use client";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { IReview } from "@/data/education";

import { ReviewAvatar, ReviewCard } from "./styled";

interface ReviewsTabProps {
  reviews: IReview[];
}

export const ReviewsTab = ({ reviews }: ReviewsTabProps) => {
  if (reviews.length === 0) {
    return (
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        No reviews yet.
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <ReviewAvatar src={review.studentAvatar} alt={review.studentName} />
            <Stack spacing={0.5} flex={1}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {review.studentName}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {review.date}
                </Typography>
              </Stack>
              <Rating
                value={review.rating}
                readOnly
                size="small"
                sx={{ "& .MuiRating-iconFilled": { color: "#facc15" } }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.7 }}
              >
                {review.comment}
              </Typography>
            </Stack>
          </Stack>
        </ReviewCard>
      ))}
    </Stack>
  );
};
