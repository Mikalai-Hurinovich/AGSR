import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '@/shared/ui/Modal';

describe('Modal Component', () => {
  test('renders nothing when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('renders content when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('calls onClose when backdrop is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    const backdrop = screen.getByText('Modal Content').parentElement?.parentElement;
    if (backdrop) fireEvent.click(backdrop);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when modal content is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByText('Modal Content'));

    expect(handleClose).not.toHaveBeenCalled();
  });
});
