export class Film {
  constructor(
    public episode_id: number,
    public director: string,
    public release_date: Date,
    public opening_crawl: string,
    public title: string,
    public characters: string[]
  ) {}
}
