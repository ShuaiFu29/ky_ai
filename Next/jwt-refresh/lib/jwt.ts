import {
  SignJWT,
  jwtVerify
} from 'jose'
import {
  cookies
} from 'next/headers'

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY
  if (!secret) throw new Error('JWT_SECRET_KEY is not defined');
  // 二进制转码
  return new TextEncoder().encode(secret)
}

export const createTokens = async (userId: number) => {
  // 创建JWT载荷
  const accessToken = await new SignJWT({ userId })
    // 设置头部，指定使用HS256算法签名
    .setProtectedHeader(({ alg: 'HS256' }))
    // 颁发的时间 当前时间
    .setIssuedAt()
    .setExpirationTime('1h')
    // 使用secret签名
    .sign(getJwtSecretKey())
  const refreshToken = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getJwtSecretKey())
  return {
    accessToken,
    refreshToken
  }
}

export const setAuthCookies = async (accessToken: string, refreshToken: string) => {
  const cookieStore = await cookies()
  cookieStore.set('access_token', accessToken, {
    // 黑客XSS攻击  js试图获得cookie
    httpOnly: true, // 不能用JavaScript操作cookie
    maxAge: 60 * 60,
    sameSite: 'strict',
    path: '/'
  })
  cookieStore.set('refresh_token', refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'strict',
    path: '/'
  })
}

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token,
      getJwtSecretKey()
    )
    return payload
  } catch (error) {
    return null
  }
}