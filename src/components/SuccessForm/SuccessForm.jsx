import { Container, Title, Text, ExitLink } from './SuccessForm.styled';

export default function SuccessForm({ onClose }) {
  return (
    <Container>
      <Title>Hi! Thank you!</Title>
      <Text>We have received your message. The manager will contact you shortly.</Text>
      <ExitLink onClick={onClose}>&#60; Back to site</ExitLink>
    </Container>
  );
}
