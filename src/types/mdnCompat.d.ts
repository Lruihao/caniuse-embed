export interface CompatData {
  url: string
  title: string
  mdn_url: string
  source_file: string
  spec_url: string
  status: {
    deprecated: boolean
    experimental: boolean
    standard_track: boolean
  }
  support: Record<string, MDNCompatSupport>
}

export interface MDNCompatSupport {
  notes?: string
  partial_implementation?: boolean
  version_added: string | true
  version_removed?: string
}

export interface MDNCompatData {
  [key: string]: {
    __compat?: CompatData
    [key: string]: MDNCompatData
  }
}

export type MDNCompatDataList = [string, CompatData][]
