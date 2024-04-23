import { type CharacterListResponse } from '../../lib/rick-and-morty-api-client';
import CharactersPagination from './CharactersPagination';

const Characters = ({ info, results }: CharacterListResponse) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm p-4"
      data-testid="characters-list"
    >
      <p className="font-bold mb-4">Select a character:</p>
      <ul>
        {results!.map((character) => (
          <li key={character.id} className="mb-4">
            <a
              href={`/details/${character.id}`}
              data-testid={`character-link-${character.id}`}
            >
              <div className="flex flex-row items-center space-x-2 border border-gray-100 rounded-md hover:border-blue-200 hover:bg-blue-100/50 p-4">
                <img
                  src={character.image}
                  alt={`${character.name} - Profile Image`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p>{character.name}</p>
                  <p className="text-sm text-gray-500">{character.species}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <CharactersPagination {...info} />
    </div>
  );
};

export default Characters;
