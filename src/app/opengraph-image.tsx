import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mochi — Feed your AI superpowers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #FFF0F5, #FFFFFF)',
      padding: '80px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #FF6B9D, #FFB088)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        marginBottom: 32,
      }}>🍡</div>
      <div style={{
        fontSize: 64,
        fontWeight: 800,
        letterSpacing: '-0.035em',
        color: '#1D1D1F',
        lineHeight: 1.1,
        marginBottom: 20,
      }}>
        Feed your AI superpowers.
      </div>
      <div style={{
        fontSize: 24,
        fontWeight: 500,
        color: '#58585D',
      }}>
        mochi.market
      </div>
    </div>,
    { ...size }
  )
}
