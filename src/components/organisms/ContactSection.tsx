import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Button, Container, Form } from "react-bootstrap";

export const ContactSection: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [inquiry, setInquiry] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, inquiry });
  };

  const handleChangeInput = (
    target: string,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    setter(target);
  };

  return (
    <Container className="w-50">
      <div className="text-center mb-3">
        <span className="fs-2 text-dark libre-baskerville">Contact</span>
      </div>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ color: "#505A5F" }}
      >
        <section className="d-flex mb-3">
          <Form.Group
            className="w-50 me-3"
            controlId="lastName"
            onChange={(e) => {
              handleChangeInput(
                (e.target as HTMLInputElement).value,
                setLastName
              );
            }}
          >
            <Form.Label>姓</Form.Label>
            <Form.Control type="text" placeholder="例）太郎" />
          </Form.Group>
          <Form.Group
            className="w-50 ms-3"
            controlId="firstName"
            onChange={(e) => {
              handleChangeInput(
                (e.target as HTMLInputElement).value,
                setFirstName
              );
            }}
          >
            <Form.Label>名</Form.Label>
            <Form.Control type="text" placeholder="例）太郎" />
          </Form.Group>
        </section>
        <Form.Group
          className="mb-3"
          controlId="email"
          onChange={(e) => {
            handleChangeInput((e.target as HTMLInputElement).value, setEmail);
          }}
        >
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control type="email" placeholder="例）yamada@email.com" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="inquiry"
          onChange={(e) => {
            handleChangeInput((e.target as HTMLInputElement).value, setInquiry);
          }}
        >
          <Form.Label>お問合せ内容</Form.Label>
          <textarea className="form-control" rows={5} />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="border-0"
            style={{ backgroundColor: "#F5B05F" }}
          >
            送信する
          </Button>
        </div>
      </Form>
    </Container>
  );
};
