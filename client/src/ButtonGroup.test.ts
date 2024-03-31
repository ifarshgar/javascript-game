import { GameMode, getGameModeColumns } from "./ButtonGroup";

describe('getGameModeColumns', () => {
  it('should return 6 if the game mode is Test', () => {
    expect(getGameModeColumns(GameMode['6x1'])).toBe(6);
  });

  it('should return 6 if the game mode is Easy', () => {
    expect(getGameModeColumns(GameMode['6x6'])).toBe(6);
  });

  it('should return 8 if the game mode is Regular', () => {
    expect(getGameModeColumns(GameMode['8x6'])).toBe(8);
  });

  it('should return 10 if the game mode is Hard', () => {
    expect(getGameModeColumns(GameMode['10x6'])).toBe(10);
  });

  it('should return 6 if the game mode is undefined or wrongly chosen', () => {
    expect(getGameModeColumns('undefined')).toBe(6);
  });
});