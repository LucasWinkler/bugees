import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        tw='bg-dark-blueish-gray'
        style={{
          fontSize: 68,
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
        }}>
        <span tw='text-white'>Bugees | Bug Tracker</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
