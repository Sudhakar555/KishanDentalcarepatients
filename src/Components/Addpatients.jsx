import React, { useState } from "react";

import { Button, Form, Input, Select, Col, Row, InputNumber } from "antd";
import "./App.less";
import { jsPDF } from "jspdf";

const { TextArea } = Input;

const Addpatients = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [patientId, setPatientId] = useState(1);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const createPdf = (data) => {
    const doc = new jsPDF({
        format: "a4",
        unit: "px"
  });
  let text = `Patient ID: ${patientId}\n`;
    for (let key in data.user) {
      text += `${key}: ${data.user[key]}\n`;
    }
    doc.text(text, 10, 10);

    return doc;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values.user.name);
    const doc = createPdf(values);
    doc.save(`${patientId}__${values.user.name}.pdf`);
    setPatientId(patientId + 1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <div className="Form">
            <h1 style={{ textAlign: "center" }}>Add patient</h1>
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              labelAlign="left"
              labelWrap
              onValuesChange={onFormLayoutChange}
              size={componentSize}
              style={{
                maxWidth: 600,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name={["user", "name"]}
                rules={[
                  {
                    required: true,
                    message: "The name is required.",
                  },
                  {
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "Name can only include letters and numbers.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Age"
                name={["user", "age"]}
                rules={[
                  {
                    required: true,
                    message: "Age is required.",
                  },
                ]}
              >
                <InputNumber min={1} max={99} style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Sex"
                name={["user", "sex"]}
                rules={[
                  {
                    required: true,
                    message: "Sex is required.",
                  },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
                  options={[
                    {
                      value: "male",
                      label: "Male",
                    },
                    {
                      value: "Female",
                      label: "female",
                    },
                    {
                      value: "others",
                      label: "Other",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Address"
                name={["user", "address"]}
                rules={[
                  {
                    required: true,
                    message: "Address is required.",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                name={["user", "mobilenumber"]}
                rules={[
                  {
                    required: true,
                    message: "Mobile Number is required.",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Medical History"
                name={["user", "medicalhistory"]}
                rules={[
                  {
                    required: true,
                    message: "Medical History is required.",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                label="Chief Complaint"
                name={["user", "chiefcompliant"]}
                rules={[
                  {
                    required: true,
                    message: "Chief Compliant  is required.",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                label="Diagnosis"
                name={["user", "diagnosis"]}
                rules={[
                  {
                    required: true,
                    message: "Diagnosis is required.",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                label="Treatment Plan"
                name={["user", "plan"]}
                rules={[
                  {
                    required: true,
                    message: "Treatment Plan is required.",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};
export default Addpatients;
