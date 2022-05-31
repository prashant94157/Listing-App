import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from './actions/data';
import Card from './Card';

const Page = ({ details, getData }) => {
  const onSubmit = async () => {
    getData();
  };
  const { loading, data } = details;
  return (
    <Fragment>
      <div className='container'>
        <button className='btn mt-5 btn-success' onClick={() => onSubmit()}>
          Refresh
        </button>
      </div>
      {loading ? (
        <div className='container'>
          <div className='mt-3'>No data</div>
        </div>
      ) : (
        <div className='d-flex mt-5 justify-content-evenly flex-wrap'>
          {data.length > 0 &&
            data.map((data, index) => {
              return <Card data={data} index={index} key={index} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

Page.propTypes = {
  getData: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  details: state.details,
});

export default connect(mapStateToProps, { getData })(Page);
