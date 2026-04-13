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
  const [value, setValue] = useState('Jam');

  const isSelected = value !== '';

  return (
    <main className="section container">
      {!isSelected && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {isSelected && (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue('')}
          />
        </h1>
      )}

      {/* <table className="table">
        <tbody>
          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button" onClick={() => {
                setValue()
              }}>
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table> */}
      <table className="table">
        <tbody>
          {goods.map(good => {
            const selected = good === value;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={selected ? 'has-background-success-light' : ''}
              >
                <td>
                  {!selected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setValue(good)}
                    >
                      +
                    </button>
                  )}

                  {selected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setValue('')}
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
