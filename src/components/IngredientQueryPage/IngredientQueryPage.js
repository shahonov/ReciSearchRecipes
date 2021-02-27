import { useEffect, useState } from 'react';
import { connect } from "react-redux"
import {
  Chip,
  Paper,
  Button,
  Tooltip,
  TextField,
  Typography,
} from "@material-ui/core"

import { Search, YoutubeSearchedForOutlined, Close } from '@material-ui/icons';

import { history } from '../../data/store';
import { fetchRecipes } from '../../data/actions/ingredientRecipesActions';
import {
  saveToRecentSearches,
  deleteFromRecentSearches,
} from '../../data/actions/ingredientQueryActions';
import { getRecentSearchIngredients } from '../../data/selectors/ingredientQuerySelectors';

import './ingredientQueryPage.scss';

const IngredientQueryPage = ({
  deleteFromRecentSearches,
  saveToRecentSearches,
  fetchRecipes,
  searches,
}) => {

  const [searchIngredient, setSearchIngredient] = useState('');
  const [validationError, setValidationError] = useState('');

  const validationErrorMessage = 'Please provide ingredient';

  const handleSearchIngredientChange = ev => {
    if (ev.target.value) {
      setValidationError('');
    } else {
      setValidationError(validationErrorMessage);
    }
    setSearchIngredient(ev.target.value);
  }

  const handleSearchAgain = ingredient => {
    setSearchIngredient(ingredient);
    handleRequestQuery(ingredient);
  }

  const handleRequestQuery = ingredient => {
    if (!ingredient) {
      setValidationError(validationErrorMessage);
    } else {
      setValidationError('');
      saveToRecentSearches(ingredient);
      fetchRecipes(ingredient);
      history.push(`/results/${ingredient}/recipes`);
    }
  }

  const handleDeleteRecentSearch = (ev, search) => {
    ev.stopPropagation();
    deleteFromRecentSearches(search);
  }

  const handleEnterClick = ev => {
    if (ev.key === 'Enter') {
      handleRequestQuery(searchIngredient);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEnterClick);

    return () => {
      document.removeEventListener('keydown', handleEnterClick);
    }
  }, [handleEnterClick]);

  return (
    <div className='query-page-wrapper'>
      <Paper className='paper-container'>
        <TextField
          value={searchIngredient}
          label='Search by ingredient'
          onChange={handleSearchIngredientChange}
          className={`ingredient-input ${validationError ? '' : 'without-error'}`}
        />
        {
          validationError &&
          <Typography
            variant='caption'
            className='input-validation-error'
          >
            {validationError}
          </Typography>
        }
        {
          (searches && searches.length > 0) &&
          <div className='recent-searches-wrapper'>
            <Typography
              variant='body1'
              className='recent-searches-title'
            >
              <YoutubeSearchedForOutlined color='secondary' className='recent-searches-icon' />Recent searches
            </Typography>
            {
              searches.map((x, i) => {
                return (
                  <Chip
                    key={i}
                    label={x}
                    color='primary'
                    variant='outlined'
                    className='recent-search-item'
                    onClick={() => handleSearchAgain(x)}
                    icon={
                      <Tooltip
                        key={i}
                        title='Delete recent search'
                      >
                        <Close onClick={ev => handleDeleteRecentSearch(ev, x)} />
                      </Tooltip>
                    }
                  />
                )
              })
            }
          </div>
        }
        <Button
          color='primary'
          variant='outlined'
          className='search-button'
          startIcon={<Search color='secondary' />}
          onClick={() => handleRequestQuery(searchIngredient)}
        >
          Search
        </Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({
  searches: getRecentSearchIngredients(state),
})

const mapDispatchToProps = {
  fetchRecipes,
  saveToRecentSearches,
  deleteFromRecentSearches,
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientQueryPage);
