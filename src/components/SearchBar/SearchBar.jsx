import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SearchBar.module.css';

const SearchBar = ({ handleChangeQuery }) => {
    const initialValues = {
      query: "",
    };
    const validationSchema = Yup.object({
        query: Yup.string().required('Search query is required'),
    });

    const handleSubmit = values => {
        console.log(values);
        handleChangeQuery(values.query);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleChangeQuery={handleSubmit}
            onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.searchForm}>
            <div>
              <Field type="text" name="query" placeholder="Search..." />
              <ErrorMessage
                name="query"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    );
};

export default SearchBar;