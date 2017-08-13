export class Partials {
  constructor (
    public id?: number,
    public team_id?: number,
    public team_name?: string,
    public player_name?: string,
    public round_id?: number,
    public partial_score?: number,
    public final_score?: number,
    public players?: number,
    public team_symbol?: string,
    public battle_class?: string,
    public battle_opponent?: string,
    public diff_points?: number
  ){}
}
