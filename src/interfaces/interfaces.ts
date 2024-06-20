export interface OriginType {
    name: string;
    url: string;
}

export interface LocationType {
    name: string;
    url: string;
    type: string |null;
    dimension: string|null;
}

export interface EpisodeType {
    name: string;
    air_date: string;
    episode: string;
}

export interface InfoType {
    count: number;
    pages: number;
    next: string|null;
    prev: string|null;
}

export interface CharacterType {
    id: number;
    name: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginType;
    location: LocationType;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}

export interface ResponseType {
    info: InfoType;
    results: Array<CharacterType>;
}
