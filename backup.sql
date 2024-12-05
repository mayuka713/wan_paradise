--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO wan_paradise;

--
-- Name: prefectures; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.prefectures (
    name character varying(100) NOT NULL,
    region character varying(50) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.prefectures OWNER TO wan_paradise;

--
-- Name: prefectures_id_seq; Type: SEQUENCE; Schema: public; Owner: wan_paradise
--

CREATE SEQUENCE public.prefectures_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prefectures_id_seq OWNER TO wan_paradise;

--
-- Name: prefectures_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wan_paradise
--

ALTER SEQUENCE public.prefectures_id_seq OWNED BY public.prefectures.id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.stores (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    store_type integer,
    prefecture integer,
    city character varying(255),
    opening_hours character varying(255),
    address character varying(255),
    phone_number character varying(15),
    store_url character varying(255),
    store_img character varying(255),
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    prefecture_id integer
);


ALTER TABLE public.stores OWNER TO wan_paradise;

--
-- Name: stores_backup; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.stores_backup (
    id integer,
    name character varying(255),
    description text,
    store_type character varying(100),
    prefecture character varying(100),
    city character varying(100),
    opening_hours character varying(255),
    address character varying(255),
    phone_number character varying(20),
    store_url character varying(255),
    store_img character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    prefecture_id integer,
    tags integer
);


ALTER TABLE public.stores_backup OWNER TO wan_paradise;

--
-- Name: stores_id_seq; Type: SEQUENCE; Schema: public; Owner: wan_paradise
--

CREATE SEQUENCE public.stores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_id_seq OWNER TO wan_paradise;

--
-- Name: stores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wan_paradise
--

ALTER SEQUENCE public.stores_id_seq OWNED BY public.stores.id;


--
-- Name: stores_tags; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.stores_tags (
    id integer NOT NULL,
    store_id integer NOT NULL,
    tag_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.stores_tags OWNER TO wan_paradise;

--
-- Name: stores_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: wan_paradise
--

CREATE SEQUENCE public.stores_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_tags_id_seq OWNER TO wan_paradise;

--
-- Name: stores_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wan_paradise
--

ALTER SEQUENCE public.stores_tags_id_seq OWNED BY public.stores_tags.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    tag_type integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.tags OWNER TO wan_paradise;

--
-- Name: tags_backup; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.tags_backup (
    id integer,
    name character varying(255),
    tag_type integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.tags_backup OWNER TO wan_paradise;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: wan_paradise
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO wan_paradise;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wan_paradise
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: wan_paradise
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO wan_paradise;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: wan_paradise
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO wan_paradise;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wan_paradise
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: prefectures id; Type: DEFAULT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.prefectures ALTER COLUMN id SET DEFAULT nextval('public.prefectures_id_seq'::regclass);


--
-- Name: stores id; Type: DEFAULT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores ALTER COLUMN id SET DEFAULT nextval('public.stores_id_seq'::regclass);


--
-- Name: stores_tags id; Type: DEFAULT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores_tags ALTER COLUMN id SET DEFAULT nextval('public.stores_tags_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public."SequelizeMeta" (name) FROM stdin;
20241104020931-create-users-table.js
20241107001718-create-tags-table.js
20241107005808-create-stores-table.js
20241109031553-create-prefectures-table.js
20241109031614-add-prefecture-id-to-stores.js
20241110053857-create-stores_tags-table.js
\.


--
-- Data for Name: prefectures; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.prefectures (name, region, "createdAt", "updatedAt", id) FROM stdin;
札幌	北海道	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	1
青森県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	2
岩手県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	3
宮城県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	4
秋田県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	5
山形県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	6
福島県	東北	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	7
茨城県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	8
栃木県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	9
群馬県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	10
埼玉県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	11
千葉県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	12
東京都	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	13
神奈川県	関東	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	14
新潟県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	15
富山県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	16
石川県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	17
福井県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	18
山梨県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	19
長野県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	20
岐阜県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	21
静岡県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	22
愛知県	中部	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	23
三重県	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	24
滋賀県	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	25
京都府	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	26
大阪府	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	27
兵庫県	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	28
奈良県	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	29
和歌山県	近畿	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	30
鳥取県	中国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	31
島根県	中国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	32
岡山県	中国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	33
広島県	中国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	34
山口県	中国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	35
徳島県	四国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	36
香川県	四国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	37
愛媛県	四国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	38
高知県	四国	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	39
福岡県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	40
佐賀県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	41
長崎県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	42
熊本県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	43
大分県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	44
宮崎県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	45
鹿児島県	九州	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	46
那覇	沖縄	2024-12-04 14:19:27.947+09	2024-12-04 14:19:27.947+09	47
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.stores (id, name, description, store_type, prefecture, city, opening_hours, address, phone_number, store_url, store_img, "createdAt", "updatedAt", prefecture_id) FROM stdin;
2	わんぱーく西野	自然に囲まれた2000坪のドッグランで、大型犬でも楽しめます。	1	\N	\N	9:30〜20:00	北海道札幌市西区小別沢13	011-667-0418	http://wanpark.la.coocan.jp/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334804/wan_paradise/DogRun/morimori.jpg	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
3	バーナードスクエア	ドッグカフェに併設されたドッグランで、広々とした敷地が特徴です。	1	\N	\N	12:00〜19:00	北海道札幌市南区中ノ沢1-11-17	011-578-5576	http://www.bsq.jp/top.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681727/wan_paradise/DogRun/Barnerd.dogrun-Hokkaido.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
4	ドッグラン＆カフェ プロムナード	飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。	1	\N	\N	11:00〜17:00	北海道千歳市みどり台北1丁目8-1	0123-22-0086	https://c-promenade.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681763/wan_paradise/DogRun/Promnard.dogrun-Hokkaido.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
5	SUNNYSPOT	ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。	1	\N	\N	10月～4月 10:30 ～ 18:00、5月～9月 10:30 ～ 18:30	北海道上川郡東川町西11号北24番地	0166-82-4004	https://sunnyspot.pupu.jp/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681766/wan_paradise/DogRun/Sunnyspot.dogrun-Hokkaido.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
6	つばさドッグラン	海を眺めながら愛犬と遊ぶ。	1	\N	\N	7:00 - 21:00	東京都大田区城南島4-2-2	03-3799-6402	https://seaside-park.jp/park_jonan/tsubasadogrun/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732453925/wan_paradise/DogRun/tsubasa.dogrun-tokyo.jpg	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	13
7	イーノの森 Dog Garden	事前予約制のドッグラン。マナーレッスンを受講可能。	1	\N	\N	土日祝:10:00 - 19:00 	東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内	080-8358-0907	https://seaside-park.jp	https://res.cloudinary.com/do4lxnof9/image/upload/v1732456149/wan_paradise/DogRun/ino%27s-forest.dogrun-tokyo.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	13
8	駒沢オリンピックドックラン	緑の広がる景色が特徴	1	\N	\N	常時開放	東京都世田谷区駒沢公園1-1	03-3421-6431	https://www.tokyo-park.or.jp/park/komazawa-olympic/#park	https://res.cloudinary.com/do4lxnof9/image/upload/v1732495450/wan_paradise/DogRun/komawaza.dogrun-tokyo.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	13
9	芝浦中央公園 ドッグラン	小型犬・一般ゾーンに分かれているから遊ばせやすい	1	\N	\N	10月～4月:7:00/5月～9月:6:00	東京都港区港南1丁目2番28号	03-6433-2562	https://seaside-park.jp	https://res.cloudinary.com/do4lxnof9/image/upload/v1732494953/wan_paradise/DogRun/shibauradogrun-tokyo.jpg	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	13
10	海の公園 ドッグラン	横浜市で唯一の海水浴場を持つ海の公園内にあるドッグラン。登録不要で24時間利用可能です。	1	\N	\N	24時間	神奈川県横浜市金沢区海の公園10番	045-701-3450	https://www.hama-midorinokyokai.or.jp/park/uminokouen/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334765/wan_paradise/DogRun/uminokoen.jpg	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	14
11	WANCOTT（ワンコット）	関東最大級の屋内ドッグラン。約600㎡あり、大型犬でも思いっきり楽しむことができます。	1	\N	\N	10:00〜19:00	神奈川県横浜市中区山下町168-1 レイトンハウス3F・4F（総合受付4F）	045-264-8231	https://wancott.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334782/wan_paradise/DogRun/wancott.jpg	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	14
12	新横浜公園ドッグラン	大型犬も大満足の横浜最大級の天然芝のドッグラン	1	\N	\N	10:00〜19:00	新横浜公園 横浜市港北区小机町3300 新横浜公園内 遊具広場隣（第3 レストハウス向）	045-476-2820	http://www.shinyoko-dogrun.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733109800/wan_paradise/DogRun/shinyokohama.dogrun-kanagawa.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	14
13	アーセンプレイス	横須賀市秋谷「子安の里」にある ドッグラン併設のガーデンカフェです。	1	\N	\N	11:00〜16:00	神奈川県横須賀市秋谷3741	046-856-9210	https://earthen-place.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733109775/wan_paradise/DogRun/earthplace.dogrun-kanagawa.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	14
14	バーナード・スクエア	超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。	2	\N	\N	10:00〜19:00	北海道札幌市南区中ノ1丁目11-17	011-578-5576	http://www.bsq.jp/top.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733123853/wan_paradise/DogCafe/barnerd.dogcafe-hokkaido.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
15	ペットランド中央店	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	3	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
16	ペットタウンテン・テン アリオ店	何よりも「心」を大切にするそんなペットショップを目指して	3	\N	\N	10:00～21:00	北海道札幌市東区北７条東９丁目２－２０	011-733-1212	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
17	Pet Shop DOG dog	DOG・dogでは、はじめて彼らを家族にお迎えする方。生涯を見送り、また新たな家族をお迎えする方。大切な家族として伴侶動物と暮らす方。そんなご家族、そして動物たちのパートナーとして、皆様の生活をサポート致します。	3	\N	\N	10:00～20:00	北海道札幌市白石区東札幌4条1丁目1-1 ラソラ札幌Bタウン1F	011-867-0566	https://petshop-dogdog.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
18	緑の森どうぶつ病院 さっぽろ病院	犬専用フロア・ 猫専用フロアと分かれた、ストレスフリーな病院	4	\N	\N	9:00~20:00	\N	050-5445-0843	https://midori-no-mori.jp/sapporo/?utm_source=google&utm_medium=map_meo&utm_campaign=web_sapporo		2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
19	石山通り動物病院	伴侶動物全般の診療を、各分野の専門医療を含め行っております。	4	\N	\N	【午前】 9:30-11:30 【午後】 15:30-18:00・休診日はありません（年末年始を除く）	北海道札幌市中央区南17条西10丁目1-25	011-563-9976	https://ishiyamaah.com/		2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
20	石山通り動物病院	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	【午前】9:30-11:30【午後】15:30-18:00 休診日	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
21	あつき動物病院	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	【午前】 9:30-11:45 【午後】 16:00-18:45 休診日 火曜日、日曜午後、祝日	札幌市東区北21条東10丁目2-8	011-299-7422	https://atsuki-ac.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
22	札幌夜間動物病院	北海道唯一の夜間専門動物病院	4	\N	\N	【平日】19:00 ～ 翌6:00 【日・祝】14:00 ～ 翌6:00 休診日 年中無休	北海道札幌市西区二十四軒4条5丁目9-3の北海道獣医師会館1階	011-688-9960	https://sapporo1299.net/?utm_source=chatgpt.com	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
23	ペテモどうぶつ医療センター	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
24	アイリス動物医療センター	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
25	アニマルクリニックフロンティア	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
26	まつい犬猫病院	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
27	しょうた動物病院	札幌を中心に北海道内で店舗を展開する 道内最大のペットショップ	4	\N	\N	9:30～19:00	北海道札幌市中央区南11条西14丁目	011-532-5331	https://www.petland.co.jp/shop/chuo.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733273150/wan_paradise/PetShop/petland.png	2024-12-04 07:41:56.061	2024-12-04 07:41:56.061	1
\.


--
-- Data for Name: stores_backup; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.stores_backup (id, name, description, store_type, prefecture, city, opening_hours, address, phone_number, store_url, store_img, "createdAt", "updatedAt", prefecture_id, tags) FROM stdin;
1	わんぱーく西野	自然に囲まれた2000坪のドッグランで、大型犬でも楽しめます。	1	\N	\N	9:30〜20:00	北海道札幌市西区小別沢13	011-667-0418	http://wanpark.la.coocan.jp/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334804/wan_paradise/DogRun/morimori.jpg	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	1	\N
2	バーナードスクエア	ドッグカフェに併設されたドッグランで、広々とした敷地が特徴です。	1	\N	\N	12:00〜19:00	北海道札幌市南区中ノ沢1-11-17	011-578-5576	http://www.bsq.jp/top.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681727/wan_paradise/DogRun/Barnerd.dogrun-Hokkaido.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	1	\N
3	ドッグラン＆カフェ プロムナード	飼い主さんはもちろんワンちゃん用のメニューも充実しているドッグラン＆ドッグカフェです。	1	\N	\N	11:00〜17:00	北海道千歳市みどり台北1丁目8-1	0123-22-0086	https://c-promenade.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681763/wan_paradise/DogRun/Promnard.dogrun-Hokkaido.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	1	\N
4	SUNNYSPOT	ドッグカフェに併設されたドッグランで、田園風景に囲まれたのどかな空間です。	1	\N	\N	10月～4月 10:30 ～ 18:00、5月～9月 10:30 ～ 18:30	北海道上川郡東川町西11号北24番地	0166-82-4004	https://sunnyspot.pupu.jp/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732681766/wan_paradise/DogRun/Sunnyspot.dogrun-Hokkaido.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	1	\N
5	つばさドッグラン	海を眺めながら愛犬と遊ぶ。	1	\N	\N	7:00 - 21:00	東京都大田区城南島4-2-2	03-3799-6402	https://seaside-park.jp/park_jonan/tsubasadogrun/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732453925/wan_paradise/DogRun/tsubasa.dogrun-tokyo.jpg	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	13	\N
6	イーノの森 Dog Garden	事前予約制のドッグラン。マナーレッスンを受講可能。	1	\N	\N	土日祝:10:00 - 19:00 	東京都江東区夢の島3丁目2-1 東京夢の島マリーナ内	080-8358-0907	https://seaside-park.jp	https://res.cloudinary.com/do4lxnof9/image/upload/v1732456149/wan_paradise/DogRun/ino%27s-forest.dogrun-tokyo.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	13	\N
7	駒沢オリンピックドックラン	緑の広がる景色が特徴	1	\N	\N	常時開放	東京都世田谷区駒沢公園1-1	03-3421-6431	https://www.tokyo-park.or.jp/park/komazawa-olympic/#park	https://res.cloudinary.com/do4lxnof9/image/upload/v1732495450/wan_paradise/DogRun/komawaza.dogrun-tokyo.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	13	\N
8	芝浦中央公園 ドッグラン	小型犬・一般ゾーンに分かれているから遊ばせやすい	1	\N	\N	10月～4月:7:00/5月～9月:6:00	東京都港区港南1丁目2番28号	03-6433-2562	https://seaside-park.jp	https://res.cloudinary.com/do4lxnof9/image/upload/v1732494953/wan_paradise/DogRun/shibauradogrun-tokyo.jpg	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	13	\N
9	海の公園 ドッグラン	横浜市で唯一の海水浴場を持つ海の公園内にあるドッグラン。登録不要で24時間利用可能です。	1	\N	\N	24時間	神奈川県横浜市金沢区海の公園10番	045-701-3450	https://www.hama-midorinokyokai.or.jp/park/uminokouen/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334765/wan_paradise/DogRun/uminokoen.jpg	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	14	\N
10	WANCOTT（ワンコット）	関東最大級の屋内ドッグラン。約600㎡あり、大型犬でも思いっきり楽しむことができます。	1	\N	\N	10:00〜19:00	神奈川県横浜市中区山下町168-1 レイトンハウス3F・4F（総合受付4F）	045-264-8231	https://wancott.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1732334782/wan_paradise/DogRun/wancott.jpg	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	14	\N
11	新横浜公園ドッグラン	大型犬も大満足の横浜最大級の天然芝のドッグラン	1	\N	\N	10:00〜19:00	新横浜公園 横浜市港北区小机町3300 新横浜公園内 遊具広場隣（第3 レストハウス向）	045-476-2820	http://www.shinyoko-dogrun.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733109800/wan_paradise/DogRun/shinyokohama.dogrun-kanagawa.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	14	\N
12	アーセンプレイス	横須賀市秋谷「子安の里」にある ドッグラン併設のガーデンカフェです。	1	\N	\N	11:00〜16:00	神奈川県横須賀市秋谷3741	046-856-9210	https://earthen-place.com/	https://res.cloudinary.com/do4lxnof9/image/upload/v1733109775/wan_paradise/DogRun/earthplace.dogrun-kanagawa.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	14	\N
13	バーナード・スクエア	超大型犬もゆったり過ごせる広々とした店内と、天然芝と人工芝を組み合わせたドッグランが特徴のカフェです。	2	\N	\N	10:00〜19:00	北海道札幌市南区中ノ1丁目11-17	011-578-5576	http://www.bsq.jp/top.html	https://res.cloudinary.com/do4lxnof9/image/upload/v1733123853/wan_paradise/DogCafe/barnerd.dogcafe-hokkaido.png	2024-12-02 16:57:37.955+09	2024-12-02 16:57:37.955+09	1	\N
\.


--
-- Data for Name: stores_tags; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.stores_tags (id, store_id, tag_id, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.tags (id, name, tag_type, "createdAt", "updatedAt") FROM stdin;
1	自然芝生	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
2	人工芝生	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
3	全種利用可能	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
4	小型犬エリア有り	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
5	駐車場有り	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
6	24時間利用可能	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
7	屋内	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
8	屋外	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
9	おしっこじょうろあり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
10	うんち袋あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
11	ゴミ箱あり(うんち)	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
12	洗い場あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
13	トイレあり（人間用）	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
14	水飲み場あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
15	店内OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
16	テラス席OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
17	大型犬OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
18	駐車場あり	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
19	わんこメニューあり	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
20	駐車場あり	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
21	トリミングあり	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
22	ペットホテル併設	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
23	駅から近い	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
24	ペットホテル併設	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
25	１階に入口あり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
26	入り口自動ドアあり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
27	駐車場あり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
28	夜間・休日診察可能	5	2024-12-04 12:34:38.756647+09	2024-12-04 12:34:38.756647+09
\.


--
-- Data for Name: tags_backup; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.tags_backup (id, name, tag_type, "createdAt", "updatedAt") FROM stdin;
20	自然芝生	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
21	人工芝生	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
22	全種利用可能	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
23	小型犬エリア有り	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
24	駐車場有り	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
25	24時間利用可能	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
26	屋内	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
27	屋外	1	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
28	おしっこじょうろあり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
29	うんち袋あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
30	ゴミ箱あり(うんち)	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
31	洗い場あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
32	トイレあり（人間用）	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
33	水飲み場あり	2	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
34	店内OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
35	テラス席OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
36	大型犬OK	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
37	駐車場あり	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
38	わんこメニューあり	3	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
39	駐車場あり	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
40	トリミングあり	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
41	ペットホテル併設	4	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
42	駅から近い	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
43	ペットホテル併設	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
44	１階に入口あり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
45	入り口自動ドアあり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
46	駐車場あり	5	2024-12-03 15:59:57.782+09	2024-12-03 15:59:57.782+09
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: wan_paradise
--

COPY public.users (id, email, name, password, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: prefectures_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wan_paradise
--

SELECT pg_catalog.setval('public.prefectures_id_seq', 47, true);


--
-- Name: stores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wan_paradise
--

SELECT pg_catalog.setval('public.stores_id_seq', 27, true);


--
-- Name: stores_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wan_paradise
--

SELECT pg_catalog.setval('public.stores_tags_id_seq', 86, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wan_paradise
--

SELECT pg_catalog.setval('public.tags_id_seq', 28, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wan_paradise
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: prefectures prefectures_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.prefectures
    ADD CONSTRAINT prefectures_pkey PRIMARY KEY (id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (id);


--
-- Name: stores_tags stores_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores_tags
    ADD CONSTRAINT stores_tags_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: stores stores_prefecture_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_prefecture_id_fkey FOREIGN KEY (prefecture_id) REFERENCES public.prefectures(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: stores_tags stores_tags_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores_tags
    ADD CONSTRAINT stores_tags_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: stores_tags stores_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wan_paradise
--

ALTER TABLE ONLY public.stores_tags
    ADD CONSTRAINT stores_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

