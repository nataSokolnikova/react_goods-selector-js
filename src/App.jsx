import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isSelected = selectedGood !== '';

  const handleSelect = good => {
    setSelectedGood(good);
  };

  const handleClear = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected ? `${selectedGood} is selected` : 'No goods selected'}

        {isSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isGoodSelected ? 'has-background-success-light' : ''}
              >
                {/* <td>
                  {!isGoodSelected ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => handleSelect(good)}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={handleClear}
                      >
                        -
                      </button>
                    )}
                </td> */}
                <td>
                  {!isSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelect(good)}
                    >
                      +
                    </button>
                  )}

                  {isGoodSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClear}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
