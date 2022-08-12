import { useState, useEffect } from 'react';
import { StackoverflowData } from 'types/items';
import s from './StackoverflowCard.module.css';

const StackoverflowCard = () => {
  const [item, setItem] = useState<StackoverflowData>();

  const getActivityData = async () => {
    const response = await fetch('/api/stackoverflow-stats');
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getActivityData().then((res) => setItem(res));
  }, []);

  return (
    <div className={s.root} aria-label="stackoverflow activity card">
      {item && (
        <svg
          width={250}
          height={150}
          viewBox="0 0 250 150"
          xmlns="http://www.w3.org/2000/svg"
          className={s.card}
          href={item.link}
        >
          <a
            href={item.link}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <svg
              width="50"
              height="50"
              x="200"
              y="0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image href={item.profile_image} width="50" height="50" />
            </svg>
            <svg
              width="150"
              height="30"
              x="15"
              y="5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                height="30"
                width="150"
                className={s.soimage}
              />
            </svg>
          </a>
          <g>
            <text x="0" y="70" fill="var(--floaty-background-text)">
              Reputation: {item.reputation}
            </text>
          </g>
          <g>
            <text x="0" y="105" fill="var(--floaty-background-text)">
              Rating: {item.rating}
            </text>
          </g>
          <g>
            <text x="0" y="140" fill="var(--floaty-background-text)">
              Badges:
            </text>
            <text
              x="65"
              y="140"
              fill="var(--floaty-background-text)"
              className={s.line}
            >
              <tspan fill="#F1B600">● {item.badge_counts.gold}</tspan>
              <tspan fill="#9A9B9E" dx="1em">
                ● {item.badge_counts.silver}
              </tspan>
              <tspan fill="#AB825F" dx="1em">
                ● {item.badge_counts.bronze}
              </tspan>
            </text>
          </g>
        </svg>
      )}
    </div>
  );
};

export default StackoverflowCard;
