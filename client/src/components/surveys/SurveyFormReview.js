import React from "react";
import { connect } from "react-redux";

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "emails" }
];

const SurveyFormReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
            </div>
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
