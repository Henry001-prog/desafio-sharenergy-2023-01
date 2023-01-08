import { Container } from './styles';

interface Props {
    children: React.ReactNode
  }

export default function Content({children}: Props): JSX.Element {
    return (
        <Container>
            {children}
        </Container>
    );
}