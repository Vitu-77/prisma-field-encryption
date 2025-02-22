import { Prisma } from '@prisma/client'

// Prisma types --

export type MiddlewareParams = Prisma.MiddlewareParams
export type Middleware = Prisma.Middleware
export type DMMF = typeof Prisma.dmmf

// Internal types --

export type EncryptionFn = (clearText: any) => string
export type DecryptionFn = (cipherText: string) => any

export type CipherFunctions = {
  encryptFn: EncryptionFn
  decryptFn: DecryptionFn
  encryptionKey?: never
  decryptionKeys?: never
}

export type Keys = {
  encryptionKey?: string
  decryptionKeys?: string[]
  encryptFn?: never
  decryptFn?: never
}

export type Configuration = CipherFunctions | Keys | {}

export interface FieldConfiguration {
  encrypt: boolean
  strictDecryption: boolean
}

export interface FieldMatcher {
  regexp: RegExp
  fieldConfig: FieldConfiguration
}
