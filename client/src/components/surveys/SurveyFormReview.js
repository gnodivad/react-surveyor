import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import formFields from "./formFields";

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "emails" }
];

const SurveyFormReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>{reviewFields}</div>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
