import { memo, useCallback, useState } from "react";
import { IconButton } from "../../../common/buttons";
import { Modal } from "../../../common/Modal";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { shareLink } from "../../../store/shareSlice/shareSlice";
import "./styles/FirstStep.css";
const localURL: string = "localhost:3000";
const id = 1;

const shareLinks = {
  vk: `https://vk.com/share.php?url=http://${localURL}`,
  facebook: `https://facebook.com/sharer/sharer.php?u=#${localURL}`,
  tw: `https://twitter.com/intent/tweet?text=${localURL}`,
  ok: `https://connect.ok.ru/offer?url=http://${localURL}`,
};

export const FirstStep = memo(function FirstStep(props: {
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState("");
  const linkIsShared = useAppSelector(
    (state) => state.shareStatus.isLinkShared
  );
  const dispatch = useAppDispatch();

  const openModal = useCallback(() => {
    const activeElement = document.activeElement!.id.toString();

    if (activeElement! in shareLinks) {
      setLink(shareLinks[activeElement as keyof typeof shareLinks]);
      setIsModalOpen(true);
    }
  }, [setIsModalOpen]);

  const submitSharing = useCallback(async () => {
    try {
      window.open(link, "_blank", "noopener,noreferrer");
      await fetch(`http://localhost:8080/visitor/${id}/share`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
        }),
      });

      dispatch(shareLink(true));
      setIsModalOpen(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  }, [dispatch, link]);

  return (
    <div className="first-step-container">
      <span
        className={
          !linkIsShared
            ? "first-step-container__title active"
            : "first-step-container__title inactive"
        }
      >
        Поделиcь с друзьями:
      </span>

      <div className="button-group">
        <IconButton
          id="vk"
          disabled={linkIsShared}
          onClick={openModal}
          buttonClassName="vk"
          iconName="vk"
        />
        <IconButton
          id="facebook"
          disabled={linkIsShared}
          onClick={openModal}
          buttonClassName="facebook"
          iconClassName="facebook-icon"
          iconName="facebook"
        />
        <IconButton
          id="tw"
          disabled={linkIsShared}
          onClick={openModal}
          buttonClassName="tw"
          iconName="tw"
        />
        <IconButton
          id="ok"
          disabled={linkIsShared}
          onClick={openModal}
          buttonClassName="ok"
          iconClassName="ok-icon"
          iconName="ok"
        />
      </div>

      <Modal
        submit={submitSharing}
        link={link}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </div>
  );
});
