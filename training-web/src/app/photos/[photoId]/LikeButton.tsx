"use client";

type Props = {
  photoId: string | null;
};

export function LikeButton({ photoId }: Props) {
  return (
    <button
      onClick={() => {
        console.log(`photoId: ${photoId}に「いいねが」押されました。`);
      }}
      disabled={!photoId && true}
    >
      いいね
    </button>
  );
}
